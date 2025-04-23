import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (res.ok) {
      // Login erfolgreich: weiterleiten
      router.push("/");
    } else {
      setError(data.msg || "E-Mail oder Passwort ungültig");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/images/login-bg.jpg)" }}
    >
      <div className="bg-black/70 p-8 rounded-xl shadow-xl max-w-sm w-full">
        {/* Logo */}
        <img
          src="/images/login-logo.png"
          alt="Energiekrieg Logo"
          className="mx-auto mb-6 w-48"
        />

        {/* Fehlermeldung */}
        {error && (
          <p className="text-red-400 text-center mb-4">{error}</p>
        )}

        {/* Login-Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-yellow-300 font-semibold mb-1"
            >
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/90 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-yellow-300 font-semibold mb-1"
            >
              Passwort
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/90 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md"
          >
            LOG IN
          </button>
        </form>

        {/* Link zur Registrierung */}
        <p className="mt-6 text-center text-sm text-white">
          Noch keinen Account?{" "}
          <a
            href="/register"
            className="text-yellow-400 hover:underline font-semibold"
          >
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
