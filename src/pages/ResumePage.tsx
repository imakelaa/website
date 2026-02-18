import { resumeData } from "../pages/Data/resume.data";
import ResumeRenderer from "./ResumeRenderer";

export default function Resume() {
  return <ResumeRenderer data={resumeData} />;
}
