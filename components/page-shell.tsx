import { SiteNav } from "@/components/site-nav";

export function PageShell({
  children,
  showBlobs = true,
}: {
  children: React.ReactNode;
  showBlobs?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <SiteNav />

      {showBlobs && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="blob absolute -top-24 left-1/4 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[110px]" />
          <div className="blob absolute -bottom-28 right-1/4 h-[460px] w-[460px] rounded-full bg-secondary/20 blur-[110px]" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
