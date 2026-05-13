import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-mono text-accent-blue text-sm tracking-widest mb-4">ERROR 404</div>
        <h1 className="font-display text-7xl text-text-primary mb-4">
          Not <span className="gradient-text italic">Found</span>
        </h1>
        <p className="text-text-secondary mb-8">
          This page doesn&apos;t exist — but great things await on the other side.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
