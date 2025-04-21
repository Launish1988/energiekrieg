// lib/session.ts

// Holt den aktuellen Benutzernamen
export const getUsername = (): string => {
  return localStorage.getItem('energiekrieg_user') || '';
};

// Speichert den Benutzernamen (z. B. beim Login)
export const setUsername = (name: string) => {
  localStorage.setItem('energiekrieg_user', name);
};

// Entfernt den Benutzernamen (z. B. beim Logout)
export const clearUsername = () => {
  localStorage.removeItem('energiekrieg_user');
};

// Prüft, ob ein Benutzer eingeloggt ist
export const isLoggedIn = (): boolean => {
  return !!getUsername();
};
