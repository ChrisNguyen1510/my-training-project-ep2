export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function slugify(text: string | undefined | null) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
