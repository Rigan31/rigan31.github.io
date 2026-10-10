import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import "katex/dist/katex.min.css";
import profile from "@/data/profile";
import { getAllPosts, getPost, renderMarkdown } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  const posts = getAllPosts();
  // Static export needs at least one path; with no posts this simply renders a 404.
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "empty" }];
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [profile.name],
    },
  };
}

export default async function BlogPost({ params }) {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const post = posts[index];
  const html = await renderMarkdown(post.content);
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <article className="container-page pb-24 pt-10 lg:pt-14">
      <div className="mx-auto max-w-[44rem]">
        <Link href="/blog" className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink">
          <LuArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
          All posts
        </Link>

        <header className="rise mt-8 border-b border-line pb-9">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.74rem] uppercase tracking-wider text-faint">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
            {post.draft && <span className="rounded bg-warm/10 px-1.5 py-0.5 text-warm">Draft</span>}
          </p>
          <h1 className="mt-4 font-serif text-[2.4rem] font-normal leading-[1.1] tracking-[-0.015em] text-ink sm:text-[3rem]">
            {post.title}
          </h1>
          {post.description && <p className="mt-4 text-lg leading-relaxed text-muted">{post.description}</p>}
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="tag font-mono text-[0.7rem]">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:scroll-mt-24 prose-p:leading-[1.8]"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {(newer || older) && (
          <nav className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            {older ? <PostLink post={older} label="Previous" dir="prev" /> : <span />}
            {newer && <PostLink post={newer} label="Next" dir="next" />}
          </nav>
        )}
      </div>
    </article>
  );
}

function PostLink({ post, label, dir }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`card group block p-5 transition-colors hover:border-accent/40 ${dir === "next" ? "sm:text-right" : ""}`}
    >
      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-faint">
        {dir === "prev" && <LuArrowLeft />}
        {label}
        {dir === "next" && <LuArrowRight />}
      </span>
      <span className="mt-1 block font-serif text-lg leading-snug text-ink group-hover:text-accent">{post.title}</span>
    </Link>
  );
}
