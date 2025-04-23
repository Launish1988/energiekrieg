// pages/login.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.msg || "Login fehlgeschlagen");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("/images/login-bg.jpg")`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-sm w-full text-center space-y-6">
        {/* Logo oben */}
        <div className="mx-auto w-48 h-auto">
          <Image
            src="/images/login-logo.png"
            alt="Energiekrieg Logo"
            width={300}
            height={150}
          />
        </div>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gold mb-1">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gold mb-1">
              Passwort
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 rounded bg-gray-800 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 rounded bg-gold text-black font-bold"
          >
            LOG IN
          </button>
        </form>

        <p className="text-gray-300">
          Noch keinen Account?{" "}
          <a href="/register" className="underline text-gold">
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
