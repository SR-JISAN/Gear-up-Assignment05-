import Link from "next/link";
import { NotFoundActions } from "@/components/ui/not-found-action";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-6 py-16">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] bg-size-[40px_40px]"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Error 404
        </span>

        <h1 className="text-balance text-7xl font-bold leading-none tracking-tight text-foreground sm:text-8xl">
          404
        </h1>

        <h2 className="mt-6 text-balance text-2xl font-semibold text-foreground sm:text-3xl">
          Did Not Found The Page!
        </h2>

        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>

        <NotFoundActions />

        <p className="mt-10 text-sm text-muted-foreground">
          Need help?{" "}
          <Link
            href="/"
            className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            Return home
          </Link>
        </p>
      </div>
    </main>
  );
}
