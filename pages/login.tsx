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
      style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg max-w-sm w-full text-center space-y-6">
        {/* Logo */}
        <div>
          <Image
            src="/images/login-logo.png"
            alt="Energiekrieg Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Fehlermeldung */}
        {error && <p className="text-red-400">{error}</p>}

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gold font-semibold mb-1">E-MAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-Mail"
              className="w-full px-3 py-2 rounded bg-white bg-opacity-20 placeholder-gold text-white"
            />
          </div>
          <div>
            <label className="block text-gold font-semibold mb-1">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full px-3 py-2 rounded bg-white bg-opacity-20 placeholder-gold text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gold text-black font-bold rounded hover:bg-gold-dark"
          >
            LOG IN
          </button>
        </form>

        <p className="text-white">
          Noch keinen Account?{" "}
          <a href="/register" className="underline">
            Account erstellen
          </a>
        </p>
      </div>
    </div>
  );
}
