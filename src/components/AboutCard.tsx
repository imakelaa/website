import '../styles/components/AboutCard.scss';

export function AboutCard() {
  return (
    <div className="about-card">
        <div className='about-card__container'>
            <h2 className="about-card__title">Hi,<br />I’m Pakhi.</h2>
            <div className="about-card__box">
                <p className="about-card__text">
                write stuff here.
                </p>
            </div>
        </div>
    </div>
  );
}