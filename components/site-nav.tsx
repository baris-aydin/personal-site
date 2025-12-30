import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          Baris Aydin
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <Link className="hover:underline" href="/projects">Projects</Link>
          <Link className="hover:underline" href="/resume">Resume</Link>
          <Link className="hover:underline" href="/contact">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
