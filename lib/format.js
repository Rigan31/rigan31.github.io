// Dates in front matter are calendar days, so format them in UTC to avoid off-by-one shifts.
export function formatDate(iso, style = "long") {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
