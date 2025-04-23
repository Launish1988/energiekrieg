// pages/login.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      // bei Erfolg weiter zum Dashboard / Home
      router.push("/");
    } else {
      const { msg } = await res.json();
      setError(msg || "Login fehlgeschlagen");
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/images/login-bg.jpg)" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-sm w-full text-center">
        {/* Logo */}
        <img
          src="/images/login-logo.png"
          alt="Energiekrieg Logo"
          className="mx-auto mb-6 w-36"
        />

        {/* Titel */}
        <h1 className="text-2xl font-bold text-yellow-300 mb-4">Log In</h1>

        {/* Fehler ausgeben */}
        {error && (
          <p className="text-red-400 mb-4">
            {error}
          </p>
        )}

        {/* Formular */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-yellow-200 mb-1" htmlFor="email">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-200 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-left text-yellow-200 mb-1" htmlFor="password">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-200 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded"
          >
            LOG IN
          </button>
        </form>

        {/* Link zum Registrieren */}
        <p className="mt-4 text-yellow-200">
          Noch keinen Account?{" "}
          <a href="/register" className="underline hover:text-yellow-400">
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
