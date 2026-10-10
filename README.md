# rigan31.github.io

Personal academic website of **Md Mahedi Hasan Rigan**, PhD student in Computer Science at UT Arlington.
Built with [Next.js](https://nextjs.org/) (static export) and Tailwind CSS, deployed to GitHub Pages.

## Running locally

Requires Node.js 18.17+ (22 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000 (also shows draft blog posts)
npm run build      # static site written to ./out
npm run preview    # serve ./out locally
```

Pushing to `main` builds and deploys the site through `.github/workflows/nextjs.yml`.

## Editing content

Almost everything lives in plain data files, so you rarely need to touch page code:

| What                                        | Where                                           |
| ------------------------------------------- | ----------------------------------------------- |
| Name, emails, links, research interests     | `data/profile.js`                               |
| Recent updates (About page)                 | `data/news.js`                                  |
| Research focus cards (About page)           | `data/research.js`                              |
| Experience, service, awards, affiliations   | `data/experience.js`                            |
| Publications                                | `data/publications.js`                          |
| Blog posts                                  | `content/blog/*.md`                             |
| CV (the "Resume" link)                      | `public/cv.pdf` (replace the file, keep the name) |
| Profile photo (home and About pages)        | `public/profile.jpg`                            |

### Publications

Each entry in `data/publications.js` takes a title, authors (mark yourself with `me: true`, equal
contribution with `equal: true`), venue, `type` (`conference`, `journal`, or `workshop`), and optional links
(`paper`, `pdf`, `arxiv`, `code`, `project`, `slides`, `poster`, `video`). Put the paper's figure in
`public/figures/` and set `image: "/figures/my-figure.webp"` (visitors can click it to enlarge);
otherwise a generated thumbnail is shown.

### Writing a blog post

Create `content/blog/my-post.md` (served at `/blog/my-post`):

```markdown
---
title: "My post title"
date: 2026-10-20
description: "One-sentence summary shown in the post list."
tags: [research, 3d-vision]
draft: false
---

Your post in Markdown. Code blocks, $\LaTeX$ math, tables, and images (put them in `public/blog/`) all work.
```

Posts with `draft: true` are visible in `npm run dev` but never published. See
`content/blog/writing-guide.md` for a full feature reference.

## Light and dark mode

The site follows the visitor's system setting until they pick a theme with the navbar toggle (the choice
is remembered). Both palettes are defined as color tokens at the top of `app/globals.css`.

## Structure

```
app/            pages (home, about, publications, experience, blog, contact)
components/     UI pieces, incl. SpiderWeb.js (interactive home background) and ThemeToggle.js
content/blog/   Markdown blog posts
data/           site content
lib/            blog loading + Markdown rendering
public/         static files (images, cv.pdf)
```
