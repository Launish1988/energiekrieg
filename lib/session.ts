// lib/session.ts

export const getCurrentUser = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('username');
};

export const setCurrentUser = (username: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('username', username);
};

export const logoutUser = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('username');
};
