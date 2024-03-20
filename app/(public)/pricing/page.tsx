import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title Pricing Page",
  description: "SEO Description Pricing Page",

  keywords: ["Pricing Page", "SEO", "Next.js", "TypeScript"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">PricingPage</span>
    </>
  );
}
