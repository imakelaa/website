import { resumeData } from "./Data/resume.data";
import { PageRenderer } from "./PageRenderer";
import "../styles/Resume.scss";

export default function Resume() {
  return(
  <main className="resume">
      <PageRenderer page={resumeData} />
    </main>
  );
}
