export const firebaseConfig = {
  apiKey: "AIzaSyAZqzFllnD440uBDirLEB_Yu6LAnwv9U3w",
  authDomain: "ata-analar-zhinalysy.firebaseapp.com",
  projectId: "ata-analar-zhinalysy",
  storageBucket: "ata-analar-zhinalysy.firebasestorage.app",
  messagingSenderId: "585048167555",
  appId: "1:585048167555:web:9ce1d9c46d680c4dfa77b6",
  measurementId: "G-WBH7FP9NJN"
};

export const RESPONSES_COLLECTION = "responses";
export const STORAGE_KEY = "ata_analar_responses_v1";

export function readLocalResponses() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn("Local storage read failed:", e);
    return [];
  }
}

export function writeLocalResponses(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn("Local storage write failed:", e);
  }
}
