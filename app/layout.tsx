import Link from "next/link";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>

        {/* Navbar */}
        <nav className="flex gap-4 p-4 border-b">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="footer">
          © 2026 My Portfolio
        </footer>

      </body>
    </html>
  );
}