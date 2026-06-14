// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <h1>Khadija Tourabi</h1>

      <h2>Développeuse Fullstack</h2>

      <p>
        Passionnée par le développement web, je crée des applications modernes
        et performantes avec React, Next.js et TypeScript.
      </p>

      <Link href="/contact">
        <button>Me contacter</button>
      </Link>
    </main>
  );
}