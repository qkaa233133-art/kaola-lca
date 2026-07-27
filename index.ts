import type { Metadata } from "next";
import EducationDetail from "../EducationDetail";

export const metadata: Metadata = {
  title: "考啦教育课程详情｜广东高职高考全科备考",
  description:
    "了解考啦教育高职高考教学团队、全科全程A班、学习体系、课程优势与微信咨询方式。",
};

export default function KaolaDetailPage() {
  return <EducationDetail />;
}
