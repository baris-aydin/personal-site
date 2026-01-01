import { PageShell } from "@/components/page-shell";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="fade-in-up">
          <span className="text-primary font-medium mb-2 block">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s connect
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The best ways to reach me.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            className="fade-in-up delay-100 card-hover rounded-2xl border bg-card/60 p-6 block"
            href="mailto:brsalpaydn@gmail.com"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <h2 className="font-semibold">Email</h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Reach out directly via email.
            </p>
            <p className="mt-4 text-sm underline">brsalpaydn@gmail.com</p>
          </a>

          <Link
            className="fade-in-up delay-200 card-hover rounded-2xl border bg-card/60 p-6 block"
            href="https://github.com/baris-aydin"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5" />
                <h2 className="font-semibold">GitHub</h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Source code, projects, and experiments.
            </p>
            <p className="mt-4 text-sm underline">github.com/baris-aydin</p>
          </Link>

          <Link
            className="fade-in-up delay-300 card-hover rounded-2xl border bg-card/60 p-6 block sm:col-span-2"
            href="https://linkedin.com/in/baris-aydin-323837349"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5" />
                <h2 className="font-semibold">LinkedIn</h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional background and updates.
            </p>
            <p className="mt-4 text-sm underline">linkedin.com/in/baris-aydin-323837349</p>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

