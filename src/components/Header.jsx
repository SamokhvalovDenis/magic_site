import React, { useState } from "react";
import logo from "../img/logo.svg";
import castle from "../img/castle.svg";
import cane from "../img/cane.svg";
import witch_hat from "../img/witch_hat.svg";
import calendar from "../img/calendar.svg";
import comment from "../img/comment.svg";
import crystal_ball from "../img/crystal_ball.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className="close-button" onClick={closeMenu}>
            &times;
          </button>
          <li><img src={castle} alt="" className="icon" /><a href="#academyInfo" onClick={closeMenu}>Про академію</a></li>
          <li><img src={cane} alt="" className="icon" /><a href="#mysticLessons" onClick={closeMenu}>Курси магії</a></li>
          <li><img src={witch_hat} alt="" className="icon" /><a href="#teacherList" onClick={closeMenu}>Викладачі</a></li>
          <li><img src={calendar} alt="" className="icon" /><a href="#lessonPlan" onClick={closeMenu}>Розклад уроків</a></li>
          <li><img src={comment} alt="" className="icon" /><a href="#testimonialSlider" onClick={closeMenu}>Відгуки</a></li>
          <li><img src={crystal_ball} alt="" className="icon" /><a href="#contacts" onClick={closeMenu}>Контакти</a></li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Академія магії</h1>
        <p>Магія — це в першу чергу знання</p>
        <a href="#mysticLessons" className="hero-button">Переглянути курси</a>
      </div>
    </header>
  );
}