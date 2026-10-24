/**
 * Minimal inline markup used in the YAML data, following the Notion page style:
 *   **bold**   __underline__   **__bold and underline__**
 * Text is HTML-escaped first, so only these two markers produce tags.
 * Colors come from the surrounding `.rich` / `.rich-blue` classes (global.css).
 */
export function rich(text: string) {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/__(.+?)__/g, '<u>$1</u>');
}

/** Plain text without the markers (for alt text, JSON-LD, meta tags). */
export function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/__(.+?)__/g, '$1');
}
