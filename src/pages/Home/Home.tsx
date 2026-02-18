// import "../../styles/main.scss"
import "./Home.scss"
import { ProjectCard } from "../../components/ProjectCard";
import sampleImage from "../../assets/sample-image.webp"
import CfLogo from "../../assets/CFLogo.webp"
import BtLogo from "../../assets/BTlogo.png"
import { AboutCard } from "../../components/AboutCard";

function Home(){
    return (
        <section className="home">
            <div className="home__content">
                {/* <h1 className="home__title"> Hi, I'm Pakhi.</h1> */}
                <AboutCard />
            </div>

            <section className="projects__section">
                <h2 className="projects-title">Projects</h2>

                <div className="projects-grid">
                    <ProjectCard
                    title="Cloudflare"
                    description="Short description here."
                    image={CfLogo}
                    />

                    <ProjectCard
                    title="BookTessera"
                    description="Another description here."
                    image={BtLogo}
                    />

                    <ProjectCard
                    title="Multithreaded HTTP Server"
                    description="Something cool here."
                    image={sampleImage}
                    />

                </div>
            </section>
        </section>
    )
}

export default Home;