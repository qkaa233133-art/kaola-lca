import type { Metadata } from "next";
import { headers } from "next/headers";
import AssessmentQuiz from "../AssessmentQuiz";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "hzkl.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = protocol + "://" + host;

  return {
    metadataBase: new URL(origin),
    title: "免费备考测评｜考啦教育",
    description: "完成语文、数学、英语30道原创基础诊断题，了解三科学习基础并获得考啦教育线下班型建议。",
    openGraph: {
      title: "免费备考测评｜考啦教育",
      description: "语文、数学、英语30题，看清基础，再选班型。",
      type: "website",
      url: origin + "/assessment",
      images: [{ url: origin + "/og-assessment.png", width: 1200, height: 630, alt: "考啦教育免费备考测评" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "免费备考测评｜考啦教育",
      description: "语文、数学、英语30题，看清基础，再选班型。",
      images: [origin + "/og-assessment.png"],
    },
  };
}

export default function AssessmentPage() {
  return <AssessmentQuiz />;
}
