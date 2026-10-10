import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuMapPin } from "react-icons/lu";
import SpiderWeb from "@/components/SpiderWeb";
import SocialLinks from "@/components/SocialLinks";
import profile from "@/data/profile";
import portrait from "@/public/profile.jpg";

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      <SpiderWeb className="web-fade absolute inset-0 -z-10 h-full w-full" />

      <div className="container-page flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center py-12 text-center">
        {/* The web is positioned relative to this element (it must not be animated itself). */}
        <div data-web-portrait className="relative h-44 w-44 sm:h-52 sm:w-52">
          <div className="rise h-full w-full">
            <span aria-hidden className="absolute -inset-3 rounded-full border border-line bg-paper/70" />
            {/* Same photo as the About page, zoomed in a little toward the face for the circle. */}
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_18px_44px_-18px_rgba(23,24,28,0.5)]">
              <Image
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                priority
                className="h-full w-full origin-[50%_35%] scale-[1.25] object-cover"
              />
            </div>
          </div>
        </div>

        {/* The web fades out behind this block so the text stays readable. */}
        <div data-web-clear className="mt-10 flex w-full max-w-3xl flex-col items-center">
          <div className="rise w-full" style={{ animationDelay: "80ms" }}>
            <p className="eyebrow">
              {profile.role} @ {profile.affiliation}
            </p>
            <h1 className="mt-3 font-serif text-[2.1rem] font-normal leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.75rem]">
              {profile.name}
            </h1>
            <ul className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.92rem] text-muted sm:text-[0.97rem]">
              {profile.interests.map((interest) => (
                <li key={interest} className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent/60" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "160ms" }}>
            <Link href="/about" className="btn-primary px-6 py-3 text-[0.95rem]">
              Know more about me
              <LuArrowRight />
            </Link>
            <Link href="/publications" className="btn-secondary px-6 py-3 text-[0.95rem]">
              Publications
            </Link>
          </div>

          <div
            className="rise mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-faint"
            style={{ animationDelay: "240ms" }}
          >
            <SocialLinks size="sm" />
            <span className="inline-flex items-center gap-1.5">
              <LuMapPin className="text-accent" />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
