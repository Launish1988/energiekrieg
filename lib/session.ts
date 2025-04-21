/**
 * Minimal‑Session‑Helper
 *
 *  * Speichert den aktuellen User‑Namen wahlweise in `localStorage` **und**
 *    in einem (unsignierten) Cookie → dadurch server‑seitig lesbar
 *    (z. B. in Next middleware).
 *  * Kein PW‑Flow – reine Komfort‑Identifikation.
 */

const LS_KEY = "energiekrieg_user";
const COOKIE_KEY = "energiekrieg_user";
const COOKIE_MAX_AGE_DAYS = 30;

/* ---------------------------------------------
 *  LocalStorage‑Teil
 * -------------------------------------------*/
export function getUsernameLS(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(LS_KEY) || "";
}

export function setUsernameLS(name: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, name);
}

export function clearUsernameLS() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LS_KEY);
}

/* ---------------------------------------------
 *  Cookie‑Teil (plain document.cookie)
 * -------------------------------------------*/
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 86_400_000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function getUsernameCookie(): string {
  return getCookie(COOKIE_KEY) ?? "";
}

export function setUsernameCookie(name: string) {
  setCookie(COOKIE_KEY, name, COOKIE_MAX_AGE_DAYS);
}

export function clearUsernameCookie() {
  deleteCookie(COOKIE_KEY);
}

/* ---------------------------------------------
 *  High‑Level‑API (Login/Logout)
 * -------------------------------------------*/
export function login(name: string) {
  setUsernameLS(name);
  setUsernameCookie(name);
}

export function logout() {
  clearUsernameLS();
  clearUsernameCookie();
}

export function getCurrentUser(): string {
  // Cookie hat Priorität (serverseitig relevant). Fallback → LS.
  const c = getUsernameCookie();
  return c || getUsernameLS();
}

export function isLoggedIn(): boolean {
  return !!getCurrentUser();
}
