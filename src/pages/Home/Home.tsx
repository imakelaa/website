// import "../../styles/main.scss"
import "./Home.scss"
import { NavBar } from "../../components/navbar";

function Home(){
    return (
        <section className="home">
            <NavBar />
            <div className="home__content">
                <h1 className="home__title"> Hi, I'm Pakhi.</h1>
            </div>
        </section>
    )
}

export default Home;