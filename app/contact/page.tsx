import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
      
      <h1 className="text-3xl font-bold">Contact Me</h1>

      {/* Form */}
      <form className="flex flex-col gap-4 w-full max-w-md">
        
        <input
          type="text"
          placeholder="Votre nom"
          className="border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Votre email"
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Votre message"
          className="border p-2 rounded h-32"
        />

        <button className="bg-black text-white py-2 rounded">
          Envoyer
        </button>
      </form>

    </main>
  );
}