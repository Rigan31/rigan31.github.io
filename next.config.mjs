/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (writes the site to ./out on `next build`).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
