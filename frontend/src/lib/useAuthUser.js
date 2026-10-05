import { useEffect, useState } from "react";
import { watchAuth } from "@/lib/firebase";

/* The signed-in person, or null; `ready` once Firebase has answered. */
export function useAuthUser() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  useEffect(() => watchAuth((u) => { setUser(u); setReady(true); }), []);
  return { user, ready };
}
