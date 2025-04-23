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
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/login-bg.jpg")',
      }}
    >
      <form onSubmit={handleSubmit} className="relative w-full h-full">
        {/*
          Input- und Button-Flächen werden absolut über
          die Grafik gelegt. Du musst nur noch spielend
          sehen, wo E-Mail / Passwort / Login / Create Account
          auf dem Bild stehen.
        */}

        {/* E-Mail */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // kein placeholder, das Label sitzt ja im Bild
          placeholder=""
          className="
            absolute 
            top-[35%] left-1/2 transform -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-gold-200
            border-none focus:outline-none
          "
        />

        {/* Passwort */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
          className="
            absolute 
            top-[45%] left-1/2 transform -translate-x-1/2
            w-[70%] max-w-xs h-10
            bg-transparent text-gold-200
            border-none focus:outline-none
          "
        />

        {/* Login-Button */}
        <button
          type="submit"
          className="
            absolute
            top-[55%] left-1/2 transform -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        />

        {/* Create-Account-Button */}
        <button
          type="button"
          onClick={() => router.push("/register")}
          className="
            absolute
            top-[67%] left-1/2 transform -translate-x-1/2
            w-[60%] max-w-xs h-12
            bg-transparent border-none
            cursor-pointer
          "
        />

        {/* (optional) Fehlermeldung unter dem Bild */}
        {error && (
          <p className="absolute top-[80%] left-1/2 transform -translate-x-1/2 text-red-400">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
