import type { Metadata } from "next";
import { PolicyArticle } from "@/components/PolicyArticle";
import { policies } from "@/lib/policies";

const content = policies["anti-bullying"];

export const metadata: Metadata = {
  title: content.title,
  description: content.intro.slice(0, 155),
  alternates: { canonical: "/policies/anti-bullying" },
};

export default function Page() {
  return <PolicyArticle content={content} />;
}
