// import "../../styles/main.scss"
import "./Home.scss"
import { NavBar } from "../../components/Navbar";
import { ProjectCard } from "../../components/ProjectCard";
import sampleImage from "../../assets/sample-image.webp"

function Home(){
    return (
        <section className="home">
            <NavBar />
            <div className="home__content">
                <h1 className="home__title"> Hi, I'm Pakhi.</h1>
            </div>


            <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Project One"
          description="Short description here."
          image={sampleImage}
        />

        <ProjectCard
          title="Project Two"
          description="Another description here."
          image={sampleImage}
        />

        <ProjectCard
          title="Project Three"
          description="Something cool here."
          image={sampleImage}
        />

        <ProjectCard
          title="Project Four"
          description="More details here."
          image={sampleImage}
        />
      </div>
        </section>
    )
}

export default Home;