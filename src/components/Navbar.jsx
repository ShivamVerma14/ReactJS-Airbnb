import AirbnbLogo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav>
      <img src={AirbnbLogo} alt="airbnb logo" className="nav-logo" />
    </nav>
  );
}

export default Navbar;
