"use client";

import { ReactNode, useEffect, useState } from "react";
import { SiteNav } from "@/components/site-nav";

export function PageShell({
  children,
  glow = true,
}: {
  children: ReactNode;
  glow?: boolean;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!glow) return;

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [glow]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteNav />

      {/* ✅ Global moving glow (shared across pages) */}
      {glow ? (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute -top-40 left-1/4 h-[700px] w-[700px] rounded-full bg-primary/25 blur-[140px] transition-transform duration-700"
            style={{ transform: `translateY(${scrollY * 0.18}px)` }}
          />
          <div
            className="absolute top-10 right-1/4 h-[620px] w-[620px] rounded-full bg-secondary/20 blur-[140px] transition-transform duration-700"
            style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
          />
          <div
            className="absolute top-[55%] left-[18%] h-[720px] w-[720px] rounded-full bg-primary/12 blur-[160px] transition-transform duration-700"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          />
        </div>
      ) : null}

      {/* Content above glow */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

