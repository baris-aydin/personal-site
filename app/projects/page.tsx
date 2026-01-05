import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { ArrowUpRight, Github, Code, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "Twitter/X Timestamp Finder",
    description:
      "An OCR-powered automation tool that indexes and filters Twitter/X screenshots based on extracted timestamps. Uses PaddleOCR and OpenCV to detect and parse date/time, with exact, windowed, and time-range matching. Includes a Streamlit drag-and-drop UI and ZIP export for bulk results. Containerized with Docker and deployed on Railway for production-ready access.",
    tags: ["Python", "PaddleOCR", "OpenCV", "Streamlit", "Docker"],
    link: "https://tweet-time-indexer-production.up.railway.app",
  },
  {
    title: "Hiking Assistant Vest",
    description:
      "A smart hiking system combining embedded hardware and mobile software to deliver real-time environmental and motion data. A Raspberry Pi–based vest collects sensor data and communicates with a cross-platform app using BLE and MQTT. Supports features like step tracking and safety-related event detection. Focused on reliable sensor integration, efficient wireless communication, and clear real-time presentation.",
    tags: ["Raspberry Pi", "Python", "BLE", "MQTT", "React Native"],
    link: "https://github.com/mesmi/Hiking-Assistant-Vest",
  },
  {
    title: "Security System (STM32 + FreeRTOS)",
    description:
      "An embedded security system built on STM32 using C and FreeRTOS for responsive real-time behavior. Integrates keypad input, OLED + LED status, motion detection, and buzzer alerts. Uses multiple tasks to handle input, sensor monitoring, and feedback concurrently. Emphasized task coordination and reliable hardware–software interaction.",
    tags: ["C", "FreeRTOS", "STM32", "Embedded"],
    link: "https://github.com/baris-aydin",
  },
  {
    title: "Personal Task Management Web App",
    description:
      "A full-stack task manager built with React, Node.js/Express, and MongoDB with JWT authentication. Designed RESTful APIs to create, update, and delete tasks while keeping data flow consistent between client and server. Implemented a minimalist UI focused on clarity and speed. Applied Git-based workflow, error handling, and scalable backend patterns.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST"],
    link: "https://github.com/baris-aydin/personal-task-management",
  },
];

function LinkMeta(url: string) {
  const isGithub = url.includes("github.com");
  return {
    label: isGithub ? "GitHub" : "Live demo",
    Icon: isGithub ? Github : Globe,
  };
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="fade-in-up">
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Selected work across embedded systems, automation tooling, and
            full-stack development.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const { label, Icon } = LinkMeta(p.link);
            return (
              <div
                key={p.title}
                className="fade-in-up card-hover rounded-2xl border border-border bg-card/60 p-6"
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Code className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm">
                  <Link
                    className="inline-flex items-center gap-2 underline"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

