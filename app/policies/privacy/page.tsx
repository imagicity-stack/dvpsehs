import type { Metadata } from "next";
import { PolicyArticle } from "@/components/PolicyArticle";
import { policies } from "@/lib/policies";

const content = policies["privacy"];

export const metadata: Metadata = {
  title: content.title,
  description: content.intro.slice(0, 155),
  alternates: { canonical: "/policies/privacy" },
};

export default function Page() {
  return <PolicyArticle content={content} />;
}
