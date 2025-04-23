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
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/login-bg.jpg")',
      }}
    >
      {/* Formularcontainer mit absolut positionierten Feldern */}
      <form onSubmit={handleSubmit} className="absolute inset-0">
        {/* E-Mail-Feld */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
          className="
            absolute 
            top-[40%]      /* hier nach oben/unten schieben */
            left-[50%]     /* hier nach links/rechts schieben */
            -translate-x-1/2
            w-[300px]      /* Breite anpassen */
            h-[30px]       /* Höhe anpassen */
            bg-transparent 
            border-none 
            text-white 
            text-center 
            focus:outline-none
            focus:ring-0
          "
        />

        {/* Passwort-Feld */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          className="
            absolute
            top-[50%]
            left-[50%]
            -translate-x-1/2
            w-[300px]
            h-[30px]
            bg-transparent
            border-none
            text-white
            text-center
            focus:outline-none
            focus:ring-0
          "
        />

        {/* Login-Button */}
        <button
          type="submit"
          className="
            absolute
            top-[60%]
            left-[50%]
            -translate-x-1/2
            w-[200px]
            h-[40px]
            bg-transparent
            border-none
            focus:outline-none
          "
        />

        {/* Link zum Registrieren */}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="
            absolute
            top-[70%]
            left-[50%]
            -translate-x-1/2
            w-[200px]
            h-[40px]
            bg-transparent
            border-none
            focus:outline-none
          "
        />
      </form>

      {/* Optional: Fehlermeldung */}
      {error && (
        <div className="absolute top-[80%] left-[50%] -translate-x-1/2 text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}
