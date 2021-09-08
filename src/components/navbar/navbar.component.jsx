import "./navbar.styles.scss";
import Icon from "../../assets/icon.png";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="icon-container">
        <img src={Icon} alt="icon" />
      </div>
      <div className="options-container">
        <a href="/" className="option">
          Home
        </a>
        <a href="/create" className="option">
          New Post
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
