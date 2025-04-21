import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCurrentUser, logout } from "@/lib/session";

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<string>("");

  /* --------- check login on mount --------- */
  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
  }, [router]);

  /* --------- handlers --------- */
  const startMatch = () => router.push("/match");
  const openDeck = () => router.push("/deck");
  const doLogout = () => {
    logout();
    router.replace("/login");
  };

  if (!user) return null; // kurz leer bis redirect/Username geladen

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-slate-900 to-slate-800 p-4 text-center">
      <h1 className="text-3xl font-bold text-yellow-400">Willkommen, {user} ⚔️</h1>

      <div className="flex flex-col gap-3">
        <button
          onClick={startMatch}
          className="rounded bg-blue-700 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-600"
        >
          🎮 Freundschaftsspiel starten
        </button>

        <button
          onClick={openDeck}
          className="rounded bg-green-700 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-green-600"
        >
          🛠 Deck bearbeiten
        </button>

        <button
          onClick={doLogout}
          className="rounded bg-red-700 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-red-600"
        >
          🚪 Ausloggen
        </button>
      </div>
    </main>
  );
}
