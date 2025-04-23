// pages/login.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    try {
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
    } catch (err) {
      setError("Netzwerkfehler");
    }
  }

  return (
    <div
      className="relative w-screen h-screen"
      style={{
        backgroundImage: 'url("/images/login-bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <form onSubmit={handleSubmit} className="relative w-full h-full">
        {/* E-Mail Eingabe über dem goldenen Feld */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            absolute top-[36%] left-1/2 -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-white placeholder-transparent
            border-none focus:outline-none
          "
        />

        {/* Passwort Eingabe */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            absolute top-[46%] left-1/2 -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-white placeholder-transparent
            border-none focus:outline-none
          "
        />

        {/* Login Button (deckungsgleich mit dem goldenen Button) */}
        <button
          type="submit"
          className="
            absolute top-[56%] left-1/2 -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        >
          {/* Leer lassen – der sichtbare Button liegt im Hintergrundbild */}
        </button>

        {/* Create Account Button */}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="
            absolute top-[68%] left-1/2 -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        >
          {/* Leer lassen */}
        </button>

        {/* Fehlermeldung */}
        {error && (
          <p className="absolute top-[80%] left-1/2 -translate-x-1/2 text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
