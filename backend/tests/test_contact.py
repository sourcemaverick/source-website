import os
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # fallback to frontend .env parsed manually
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')

MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'test_database')


@pytest.fixture(scope="module")
def db():
    with open('/app/backend/.env') as f:
        env = dict(l.strip().split('=', 1) for l in f if '=' in l and not l.startswith('#'))
    mongo = env.get('MONGO_URL', MONGO_URL).strip('"')
    dbn = env.get('DB_NAME', DB_NAME).strip('"')
    c = MongoClient(mongo)
    yield c[dbn]
    c.close()


# --- health / regression ---
def test_root_healthy():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


def test_status_get():
    r = requests.get(f"{BASE_URL}/api/status")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_status_post():
    r = requests.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_regression"})
    assert r.status_code == 200
    data = r.json()
    assert data["client_name"] == "TEST_regression"
    assert "id" in data


# --- contact endpoint ---
def test_contact_create_and_persist(db):
    payload = {"name": "TEST_Alice", "email": "test_alice@example.com", "intention": "Seek clarity"}
    r = requests.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and "created_at" in data
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["intention"] == payload["intention"]

    # Verify persistence in Mongo
    doc = db.contact_submissions.find_one({"id": data["id"]})
    assert doc is not None
    assert doc["email"] == payload["email"]
    # cleanup
    db.contact_submissions.delete_one({"id": data["id"]})


def test_contact_empty_body():
    r = requests.post(f"{BASE_URL}/api/contact", json={})
    assert r.status_code == 422


def test_contact_missing_email():
    r = requests.post(f"{BASE_URL}/api/contact", json={"name": "X", "intention": "Y"})
    assert r.status_code == 422


def test_contact_missing_intention():
    r = requests.post(f"{BASE_URL}/api/contact", json={"name": "X", "email": "x@y.com"})
    assert r.status_code == 422
