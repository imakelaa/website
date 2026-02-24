// import { Link } from 'react-router-dom';
// import '../styles/components/AboutCard.scss';

// export function AboutCard() {
//   return (
//     <div className="about-card">
//         <div className='about-card__container'>
//             <h2 className="about-card__title">Hi,<br />I’m Pakhi.</h2>
//             <div className="about-card__box">
//                 <p className="about-card__text">
//                   Professionally, I'm a Software Engineer. I'm currently pursuing my Masters in Computer Science at 
//                   <a 
//                     href="https://www.ucsc.edu/" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   > UC Santa Cruz, </a> where I also completed my Bachelors.<br /> <br />
//                   My primary focus lies in backend. I have experience building complex end-to-end systems in C, Typescript, and Go. In my free time, 
//                   you'll often find me tinkering with my setup (just started tmux + nvim, so really into configs at the moment)
//                   or trying to break my own programs :).<br /><br/>
//                   Spiritually, I'm a connoiseur of asking the question "why". Check out my <Link to="/resume">Resume, </Link>  
//                   or <Link to="/sidequests">some of the things I do!</Link> 
//                 </p>
//             </div>
//         </div>
//     </div>
//   );
// }

import type { AboutSection as AboutSectionType } from "../pages/section_types";
import { Link } from 'react-router-dom';

export function AboutSection(props: AboutSectionType) {
  const { content } = props;

  return (
    <section className="home">
      <div className="home__content">
        <div className="about-card">
          <div className="about-card__container">
            {content.map((line, index) => {
              // Handle the line with links manually if needed
              if (index === 3) {
                return (
                  <p key={index} className="about-card__text">
                    Spiritually, I'm a connoisseur of asking the question 'why'. Check out my{" "}
                    <Link to="/resume">Resume, </Link>
                    or <Link to="/sidequests">some of the things I do!</Link>
                  </p>
                );
              }
              return (
                <p key={index} className="about-card__text">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}