import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6">
        <section className="py-20">
          <h1 className="text-4xl font-bold tracking-tight">Baris Aydin</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Computer Engineering graduate building practical systems software—from embedded and 
            real-time code to automation tools and production-ready applications.
          </p>
        </section>

        <section className="py-14 border-t">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Projects</h2>
              <p className="mt-2 text-muted-foreground">
                A few selected projects—embedded, systems, and developer tooling.
              </p>
            </div>
            <Link
              className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
              href="/projects"
            >
              View all
            </Link>
          </div>

          {/* 2 quick preview cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Twitter/X Timestamp Finder</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                An OCR-powered tool that automatically extracts and filters timestamps from Twitter/X screenshots for fast, accurate retrieval.
              </p>
              <Link className="mt-4 inline-block text-sm underline" href="/projects">
                Details
              </Link>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold">Hiking Assistant Vest</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A Raspberry Pi–based smart vest that streams real-time environmental and movement data to a mobile app using BLE and MQTT.
              </p>
              <Link className="mt-4 inline-block text-sm underline" href="/projects">
                Details
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 border-t">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Background</h2>
              <p className="mt-2 text-muted-foreground">
                Experience, education, and skills—downloadable PDF.
              </p>
            </div>
            <Link className="rounded-md border px-4 py-2 text-sm hover:bg-accent" href="/resume">
              View background
            </Link>
          </div>
        </section>

        <section className="py-14 border-t">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-2 text-muted-foreground">
                Email, LinkedIn, GitHub—say hello.
              </p>
            </div>
            <Link className="rounded-md border px-4 py-2 text-sm hover:bg-accent" href="/contact">
              Contact
            </Link>
          </div>
        </section>

        <footer className="py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Baris Aydin
        </footer>
      </div>
    </main>
  );
}


