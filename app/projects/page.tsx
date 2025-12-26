import Link from "next/link";
import { SiteNav } from "@/components/site-nav";

const PROJECTS = [
  {
    title: "Twitter/X Timestamp Finder",
    description:
      "An OCR-powered automation tool that indexes and filters Twitter/X screenshots based on extracted timestamps. The system uses PaddleOCR and OpenCV to detect and parse date/time information, supporting exact, windowed, and time-range matching for accurate retrieval. A Streamlit-based drag-and-drop interface allows users to upload screenshots in bulk and export matched results as ZIP files. The application was containerized with Docker and deployed to Railway.app for scalable, production-ready access.",
    github: "https://github.com/baris-aydin/tweet-time-indexer",
  },
  {
    title: "Hiking Assistant Vest",
    description:
      "A smart hiking system combining embedded hardware and mobile software to deliver real-time environmental and movement data. A Raspberry Pi–based vest collects sensor data (temperature, air quality, motion) and communicates with a cross-platform mobile app using BLE and MQTT. The system supports features such as step tracking, location visualization, and safety-related event detection. The project focused on reliable sensor integration, efficient wireless communication, and clear real-time data presentation.",
    github: "https://github.com/mesmi/Hiking-Assistant-Vest",
  },
  {
    title: "Security System",
    description:
      "An embedded security system built on the STM32 Nucleo-F446RE using C and FreeRTOS, designed for responsive real-time operation. The system integrates a keypad for password entry, an OLED display and LEDs for status feedback, a motion sensor for intrusion detection, and a buzzer for alerts. Multiple FreeRTOS tasks were used to handle input processing, sensor monitoring, and system feedback concurrently. The project emphasized real-time responsiveness, task synchronization, and reliable hardware–software interaction.",
    github: "https://github.com/your-handle/your-repo",
  },
  {
    title: "Personal Task Management Web App",
    description:
      "A full-stack task management application developed with React, Node.js, Express, and MongoDB, featuring JWT-based authentication for secure user access. The app exposes RESTful APIs to create, update, and delete tasks while maintaining consistent data flow between client and server. A minimalist, user-friendly interface was designed to prioritize clarity and ease of use. The project applied version control, error handling, and scalable backend design practices.",
    github: "https://github.com/your-handle/your-repo",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />

      <div className="mx-auto max-w-5xl px-6 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Selected work across embedded/systems/dev tooling. Each project includes context, what I built, and links.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

              <div className="mt-5 flex items-center gap-4 text-sm">
                <Link className="underline" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
