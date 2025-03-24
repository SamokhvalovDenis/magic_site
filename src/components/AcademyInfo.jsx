import React, { useState, useEffect } from "react";
import magicSea from "../img/magicSea.svg";
import img_1 from "../img/img_1.svg";
import img_2 from "../img/img_2.svg";
import img_3 from "../img/img_3.svg";
import img_4 from "../img/img_4.svg";

export default function AcademyInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; 
  const images = [img_1, img_2, img_3, img_4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // зміна слайду кожні 3 секунди

    return () => clearInterval(interval); // очищення інтервалу при демонтажі компонента
  }, []);

  return (
    <div className="academy" id="academyInfo">
      <div className="welcomeSection">
        <img src={magicSea} alt="" />
        <div className="accented-text">
          <div className="line top"></div>
          <p>
            Ласкаво просимо до Академії верхової їзди, де кожен рух витончений.
            Пориньте у світ вишуканої верхової їзди, де з кожним кроком
            складають легенди. Підготуйтеся до епічної подорожі у світ
            елегантності та майстерності.
          </p>
          <div className="line bottom"></div>
        </div>
        <img src={magicSea} alt="" />
      </div>

      <div className="magicAcademyInfo">
        <div className="main-title">
          <div class="line_left"></div>
          <h2>Про академію магії</h2>
          <div class="line_right"></div>
        </div>

        <div className="academyDetails">
          <div className="slider">
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          </div>
          <div className="academyDescription">
            <span>Академія Магії</span> — це один із найдавніших і найвеличніших
            закладів магічної освіти, який об'єднує мудрих викладачів і
            талановитих учнів. Вона розташована в <span>чарівному місці</span>,
            оточеному лісами та кришталевими озерами, що самі є джерелами магії.
            В академії навчають різним магічним мистецтвам, від{" "}
            <span>стародавніх</span> заклинань до алхімії та магії природи. У
            закладі є сучасні лабораторії для експериментальної магії,
            бібліотека з рідкісними рукописами та зал для дуелей, де студенти
            можуть вдосконалювати свої навички. Кожен учень отримує
            індивідуальну <span>програму навчання</span>, що відповідає його
            здібностям та інтересам, з метою розкрити потенціал і навчити
            використовувати магічні сили на благо та гармонію.
          </div>
        </div>
      </div>
    </div>
  );
}
