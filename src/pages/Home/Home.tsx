import { homePage } from "../Data/homepage.data";
import { PageRenderer } from "../PageRenderer";
import "./Home.scss"

export default function HomePage() {
    return <PageRenderer page={homePage} />;
}