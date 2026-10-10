import { LuPenLine } from "react-icons/lu";
import BlogList from "@/components/BlogList";
import PageHeader from "@/components/PageHeader";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Notes on research, AI security, and life as a PhD student.",
};

export default function Blog() {
  const posts = getAllPosts().map(({ content, ...meta }) => meta);

  return (
    <div className="container-page pb-24 pt-12 lg:pt-16">
      <PageHeader eyebrow="Writing" title="Blog" />

      <div className="mt-10">
        {posts.length ? (
          <BlogList posts={posts} />
        ) : (
          <div className="card flex flex-col items-center px-6 py-16 text-center">
            <LuPenLine className="text-faint" size={28} />
            <p className="mt-4 font-serif text-xl text-ink">Nothing here yet</p>
            <p className="mt-1 text-sm text-muted">The first post is on its way.</p>
          </div>
        )}
      </div>
    </div>
  );
}
