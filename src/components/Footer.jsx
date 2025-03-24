import React from "react";
import logo from '../img/logo.svg';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__logo">
          <img src={logo} alt="" />
          <p>© 2025 Академія Чарів та Магії. Усі права захищено</p>
        </div>
        <div class="footer__links">
          <ul>
            <li>
              <a href="#about">Про академію</a>
            </li>
            <li>
              <a href="#courses">Курси магії</a>
            </li>
            <li>
              <a href="#teachers">Викладачі</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#schedule">Розклад уроків</a>
            </li>
            <li>
              <a href="#reviews">Відгуки</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
