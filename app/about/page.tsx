import Image from "next/image";
import { timeline } from "@/data/about";

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      
      {/* Intro */}
      <section className="flex flex-col items-center text-center gap-4">
        <div className="intro">
        <Image
          src="/avatar.png"
          alt="My photo"
          width={120}
          height={120}
          className="rounded-full"
        />

        <h1 className="text-3xl font-bold">À propos de moi</h1>

        <p className="text-gray-600 max-w-xl">
          Je suis développeuse fullstack passionnée par la création
          d'applications web modernes avec React, Next.js et TypeScript.
          J'aime transformer des idées en produits digitaux.
        </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-10">
        <div className="parcours">
        <h2 className="text-xl font-semibold mb-4">Mon parcours</h2>

        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.company} | {item.period}
              </p>
              <p className="mt-2 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>
      
    </main>
  );
}