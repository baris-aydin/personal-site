import { SiteNav } from "@/components/site-nav";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The best ways to reach me. I’m always open to discussing projects,
          opportunities, or collaborations.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Email */}
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <h2 className="font-semibold">Email</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Reach out directly via email.
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-4 inline-block text-sm underline"
            >
              brsalpaydn@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5" />
              <h2 className="font-semibold">GitHub</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Source code, projects, and experiments.
            </p>
            <Link
              href="https://github.com/baris-aydin"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm underline"
            >
              github.com/baris-aydin
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="rounded-xl border p-6 sm:col-span-2">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5" />
              <h2 className="font-semibold">LinkedIn</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional background, experience, and updates.
            </p>
            <Link
              href="https://linkedin.com/in/baris-aydin-323837349"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm underline"
            >
              linkedin.com/in/baris-aydin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
