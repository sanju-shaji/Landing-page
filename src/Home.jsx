import  { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // Ensure the correct import
import "./styles.css";
import shoe from "./assets/shoe.png"

function Home() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // ScrollReveal animations
    ScrollReveal().reveal(".container .letter-s", {
      duration: 1000,
      delay: 1000,
    });
    ScrollReveal().reveal(".container img", {
      duration: 1000,
      delay: 1500,
    });
    ScrollReveal().reveal(".container .text__left", {
      ...scrollRevealOption,
      origin: "right",
      delay: 2000,
    });
    ScrollReveal().reveal(".container .text__right", {
      ...scrollRevealOption,
      origin: "left",
      delay: 2000,
    });
    ScrollReveal().reveal(".container .explore", {
      duration: 1000,
      delay: 2500,
    });
    ScrollReveal().reveal(".container h5", {
      duration: 1000,
      interval: 500,
      delay: 3000,
    });
    ScrollReveal().reveal(".container .catalog", {
      duration: 1000,
      delay: 5000,
    });
    ScrollReveal().reveal(".container .print", {
      duration: 1000,
      delay: 5500,
    });
    ScrollReveal().reveal(".footer p", {
      duration: 1000,
      delay: 7000,
    });
  }, []);

  return (
    <div className="container">
      <nav>
        <ul className="nav__links nav__left">
          <li><a href="#" className="logo">ShoopeR</a></li>
          <li><a href="#">Store</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Collection</a></li>
        </ul>
        <ul className="nav__links nav__right">
          <li><a href="#">Cart</a></li>
          <li><a href="#">Login/Register</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
      <span className="letter-s">Z</span>
      <img src={shoe} alt="header" />
      <h4 className="text__left">SHO</h4>
      <h4 className="text__right">TOP</h4>
      <button className="btn explore">EXPLORE MORE</button>
      
      
      <h5 className="feature-1">Sneekers</h5>
      <h5 className="feature-2">Floaters</h5>
      <h5 className="feature-3">Classic</h5>
      <h5 className="feature-4">Modern</h5>
      <footer className="footer">
        <p>Copyright © 2024 Web Design Mastery. All rights reserved.</p>
        <div className="footer__links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </div>
      </footer>
    </div>
  );
}

export default Home;
