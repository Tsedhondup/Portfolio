import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section>
      <nav>
        <Link to="/">TD</Link>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <span>Resume</span>
      </nav>
    </section>
  );
};

export default Header;
