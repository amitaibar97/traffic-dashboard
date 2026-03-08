import { auth } from "../lib/firebase";

const getAuthHeaders = async (): Promise<HeadersInit> => {
  const token = await auth.currentUser?.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const fetchRequest = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
};
