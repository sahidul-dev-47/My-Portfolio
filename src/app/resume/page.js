import ResumeClient from "@/components/resume/ResumeClient";
import { generateResume } from "@/lib/resumeGenerator";

export const metadata = {
  title: "Resume",
  description: "Professional resume of Shahidul Islam — Full Stack MERN Developer.",
};

export default function ResumePage() {
  const resume = generateResume();
  return <ResumeClient resume={resume} />;
}
