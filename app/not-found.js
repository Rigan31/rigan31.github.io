import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-3 font-serif text-5xl font-normal tracking-tight text-ink">Lost in the web</h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">
        <LuArrowLeft />
        Back home
      </Link>
    </div>
  );
}
