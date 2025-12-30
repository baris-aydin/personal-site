"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.1,
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}</span>;
};

const ProjectCard = ({
  title,
  description,
  tags,
  href,
  delay,
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  delay: number;
}) => {
  return (
    <Link
      href={href}
      className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 card-hover fade-in-up block"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
          <Code className="text-primary-foreground" size={24} />
        </div>
        <ArrowUpRight
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          size={24}
        />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featured = [
    {
      title: "Twitter/X Timestamp Finder",
      description:
        "An OCR-powered tool that extracts and filters timestamps from Twitter/X screenshots for fast, accurate retrieval.",
      tags: ["Python", "PaddleOCR", "OpenCV", "Docker"],
      href: "/projects",
    },
    {
      title: "Hiking Assistant Vest",
      description:
        "A Raspberry Pi–based smart vest that streams real-time environmental and movement data to a mobile app using BLE and MQTT.",
      tags: ["Raspberry Pi", "BLE", "MQTT", "Python"],
      href: "/projects",
    },
    {
      title: "Security System (STM32 + FreeRTOS)",
      description:
        "An embedded security system with keypad input, OLED status, motion detection, and concurrent real-time tasks.",
      tags: ["C", "FreeRTOS", "STM32"],
      href: "/projects",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteNav />

      {/* Hero */}
      <section className="min-h-[calc(100vh-64px)] relative flex items-center justify-center px-4">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] transition-transform duration-1000"
            style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-8">
              <Sparkles size={16} className="text-primary" />
              Open to opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.15] fade-in-up delay-100">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-[1.15] pb-1">Baris Aydin</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto fade-in-up delay-200">
            Computer Engineering graduate building practical systems software—from embedded and real-time code to
            automation tools and production-ready applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 fade-in-up delay-300">
            <Link
              href="/projects"
              className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-[var(--glow-primary)]"
            >
              View My Work
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-12 fade-in-up delay-400">
            <Link
              href="https://github.com/baris-aydin"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </Link>
            <Link
              href="https://linkedin.com/in/baris-aydin-323837349"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="brsalpaydn@gmail.com"
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-muted-foreground" size={32} />
          </div>
        </div>
      </section>

      {/* Stats (optional but looks great) */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { value: 10, suffix: "+", label: "Major Projects" },
            { value: 2, suffix: "+", label: "Domains (Embedded & Web)" },
            { value: 50, suffix: "+", label: "Students Supported" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <span className="text-primary font-medium mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few highlights. See the full list with detailed write-ups and GitHub links.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 100} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              View all projects <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border rounded-3xl fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let’s connect</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Want to chat about embedded systems, automation tools, or software roles? I’m happy to connect.
            </p>
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[var(--glow-primary)] transition-all duration-300 inline-flex items-center gap-2"
            >
              Get in touch <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Baris Aydin. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}



