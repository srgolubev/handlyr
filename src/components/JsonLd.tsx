interface JsonLdProps {
  schema: Record<string, unknown>;
}

/**
 * Renders a JSON-LD structured data <script> tag.
 * Place inside <head> or anywhere in the document — search engines read it either way.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
