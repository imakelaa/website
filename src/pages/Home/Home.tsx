import { Link } from "react-router-dom";
import { homePage } from "../Data/homepage.data";
import { PageRenderer } from "../PageRenderer";
import "./Home.scss"

export default function HomePage() {
    <Link to="/resume">go to resume!!!!!s</Link>
    return <PageRenderer page={homePage} />;
}