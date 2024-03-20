import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title Contact Page",
  description: "SEO Description Contact Page",

  keywords: ["Contact Page", "SEO", "Next.js", "TypeScript"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">ContactPage</span>
    </>
  );
}
