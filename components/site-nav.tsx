import Link from "next/link";
/*import { ThemeToggle } from "@/components/theme-toggle";*/

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Baris Aydin
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link className="text-muted-foreground hover:text-foreground transition-colors" href="/">
            Home
          </Link>
          <Link className="text-muted-foreground hover:text-foreground transition-colors" href="/projects">
            Portfolio
          </Link>
          <Link className="text-muted-foreground hover:text-foreground transition-colors" href="/resume">
            Resume
          </Link>
          <Link className="text-muted-foreground hover:text-foreground transition-colors" href="/contact">
            Contact
          </Link>
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}

