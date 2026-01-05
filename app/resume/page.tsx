import { PageShell } from "@/components/page-shell";
import Link from "next/link";

type TimelineEntry = {
  title: string;
  org: string;
  location: string;
  date: string;
  bullets: string[];
};

const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Software Developer – OCR Automation Project",
    org: "Freelance Software Development",
    location: "Ottawa, ON",
    date: "Sep 2025 – Dec 2025",
    bullets: [
      "Built an OCR-powered screenshot indexing system (Python, PaddleOCR, OpenCV, Streamlit) to extract and filter timestamps from Twitter/X screenshots.",
      "Implemented date/time parsing with exact, windowed, and time-range matching for reliable retrieval.",
      "Containerized the app with Docker and deployed on Railway for accessible, scalable usage.",
    ],
  },
  {
    title: "Teaching Assistant – Operating Systems",
    org: "University of Ottawa",
    location: "Ottawa, ON",
    date: "May 2024 – Sep 2024",
    bullets: [
      "Led weekly labs and supported 20+ students with debugging and core OS concepts.",
      "Covered processes, IPC, threads, semaphores, and memory management in C/Java on Ubuntu.",
      "Reinforced learning through practical exercises and one-on-one support during labs and office hours.",
    ],
  },
  {
    title: "Line Cook",
    org: "JOEY Rideau",
    location: "Ottawa, ON",
    date: "Jan 2022 – Jan 2023",
    bullets: [
      "Worked in a high-tempo environment, strengthening prioritization and problem-solving.",
      "Collaborated under pressure while maintaining consistency and attention to detail.",
    ],
  },
];

const EDUCATION: TimelineEntry[] = [
  {
    title: "Bachelor of Applied Science in Computer Engineering",
    org: "University of Ottawa",
    location: "Ottawa, ON",
    date: "Sep 2020 – Apr 2025",
    bullets: [
      "Relevant coursework: Operating Systems, Computer Architecture, Data Communications & Networking, Real-Time Systems Design, Data Structures & Algorithms.",
      "Built projects across embedded systems, GPU programming (CUDA), and full-stack development.",
    ],
  },
];

function TimelineItem({
  title,
  org,
  location,
  date,
  bullets,
  isLast,
}: TimelineEntry & { isLast: boolean }) {
  return (
    <div className="grid grid-cols-[20px_1fr] gap-4">
      {/* Left rail */}
      <div className="relative flex justify-center">
        <div className="mt-2 h-3 w-3 rounded-full border border-border bg-background" />
        {!isLast && <div className="absolute top-6 bottom-0 w-px bg-border" />}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <div className="text-sm text-muted-foreground">
            {org} • {location}
          </div>
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TimelineSection({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading?: string;
  items: TimelineEntry[];
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      {subheading ? (
        <p className="mt-1 text-sm text-muted-foreground">{subheading}</p>
      ) : null}

      <div className="mt-8">
        {items.map((item, idx) => (
          <TimelineItem
            key={`${item.title}-${item.date}`}
            {...item}
            isLast={idx === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="fade-in-up">
          <span className="mb-2 block font-medium text-primary">Resume</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Experience & Education
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A quick timeline of my experience and education, plus a PDF download.
          </p>
        </div>

        <div className="mt-10 grid gap-8">
          {/* Experience */}
          <section className="fade-in-up card-hover rounded-2xl border border-border bg-card/60 p-6 delay-100">
            <TimelineSection
              heading="Experience"
              subheading="Most recent first."
              items={EXPERIENCE}
            />
          </section>

          {/* Education */}
          <section className="fade-in-up card-hover rounded-2xl border border-border bg-card/60 p-6 delay-200">
            <TimelineSection heading="Education" items={EDUCATION} />
          </section>

          {/* PDF download */}
          <section className="fade-in-up card-hover rounded-2xl border border-border bg-card/60 p-6 delay-300">
            <h2 className="text-lg font-semibold text-foreground">Resume PDF</h2>
            {/*<p className="mt-2 text-sm text-muted-foreground">
              Download the one-page resume version.
            </p>*/}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex rounded-md border px-4 py-2 text-sm hover:bg-accent"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View / Download PDF
              </a>

              <Link
                className="inline-flex rounded-md border px-4 py-2 text-sm hover:bg-accent"
                href="/projects"
              >
                View Projects
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}


