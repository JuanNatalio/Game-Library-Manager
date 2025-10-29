export const descriptionParser = (description: string): string => {
  const parsedDescription = description
    .replaceAll("<p>", "")
    .replaceAll("</p>", "\n")
    .replaceAll("<br>", "\n")
    .replaceAll("<br/>", "\n")
    .replaceAll("&rsquo;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&ndash;", "–")
    .replaceAll("&mdash;", "—")
    .replaceAll("&hellip;", "…")
    .replaceAll("&amp;", "&");
  return parsedDescription;
};
