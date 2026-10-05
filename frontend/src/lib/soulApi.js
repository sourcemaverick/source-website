/* Calls to the Source backend with the signed-in person's ID token. */
import { idToken, auth } from "@/lib/firebase";

export const API_BASE =
  process.env.REACT_APP_API_BASE_URL || "https://cognitive-twin-api-yim7i2xs4a-uc.a.run.app";

export class ApiError extends Error {
  constructor(status, code, body) {
    super(code || `HTTP ${status}`);
    this.status = status;
    this.code = code;
    this.body = body;
  }
}

async function call(path, { method = "GET", body } = {}) {
  const token = await idToken();
  if (!token) throw new ApiError(401, "not_signed_in");
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  let data = null;
  try { data = await res.json(); } catch (e) { data = null; }
  if (!res.ok) {
    const err = data && (data.error || data.detail);
    const code = typeof err === "object" && err ? err.error_code : (typeof err === "string" && err.includes("consent_required") ? "consent_required" : (data && data.error_code) || "");
    throw new ApiError(res.status, code, data);
  }
  return data;
}

export const uid = () => (auth.currentUser ? auth.currentUser.uid : null);

/* consent, the same record the app writes */
export const checkConsent = () => call(`/api/v1/sessions/user/${uid()}/consent`);
export const recordConsent = () => call(`/api/v1/sessions/user/${uid()}/consent`, { method: "POST" });

/* soul search */
export const listSearches = () => call("/api/v1/soul/searches");
export const createSearch = () => call("/api/v1/soul/searches", { method: "POST" });
export const getSearch = (id) => call(`/api/v1/soul/searches/${id}`);
export const turn = (id, kind, text = "") => call(`/api/v1/soul/searches/${id}/turn`, { method: "POST", body: { kind, text } });
export const after = (id, feeling, decided = "") => call(`/api/v1/soul/searches/${id}/after`, { method: "POST", body: { feeling, decided } });
export const getPersona = () => call("/api/v1/soul/persona");
export const deleteSearch = (id) => call(`/api/v1/soul/searches/${id}`, { method: "DELETE" });
