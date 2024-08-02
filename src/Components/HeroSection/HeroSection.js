import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <section className="hero-container">
      <section className="hero-content">
        <h1 className="hero-content__name">
          <span className="hero-content__name--first"> Hi, I'm Tsering</span>
          <span className="hero-content__name--last">Dhondup</span>
        </h1>
        <h3 className="hero-content__title">
          A Front-End Developer from
          <span className="hero-content__title--city">Toronto</span>
        </h3>
      </section>
    </section>
  );
};
export default HeroSection;
