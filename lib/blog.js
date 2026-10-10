import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

// Drafts (`draft: true`) are visible in `npm run dev` but never published.
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

function readingMinutes(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? new Date(data.date).toISOString() : null,
        description: data.description ?? "",
        tags: data.tags ?? [],
        draft: Boolean(data.draft),
        readingTime: readingMinutes(content),
        content,
      };
    })
    .filter((post) => SHOW_DRAFTS || !post.draft)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getPost(slug) {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export async function renderMarkdown(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: ["anchor"] } })
    .use(rehypeKatex)
    .use(rehypeHighlight, { detect: false })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(file);
}
