import React, { useState, useEffect } from "react";
import left from "../img/left_arrow.svg";
import right from "../img/right_arrow.svg";
import rune from "../img/rune.svg";
import axios from "axios";

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animation, setAnimation] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  // Завантажуємо відгуки з JSON-файлу
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/679f9983acd3cb34a8d70f7e") 
      .then((res) => {
        // Доступ до масиву відгуків через res.data.record
        setTestimonials(res.data.record);
      })
      .catch((error) => {
        console.error("Error loading testimonials:", error);
      });
  }, []);

  const nextTestimonial = () => {
    setAnimation("slide-out-right");
    setTimeout(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
      setAnimation("slide-in-left");
    }, 300);
  };

  const prevTestimonial = () => {
    setAnimation("slide-out-left");
    setTimeout(() => {
      setCurrentTestimonial(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setAnimation("slide-in-right");
    }, 300);
  };

  return (
    <div id="testimonialSlider">
      <h2>Відгуки</h2>
      <div className="testimonial-slider">
        <button className="prev" onClick={prevTestimonial}>
          <img src={left} alt="Previous" />
        </button>
        <div className={`testimonial ${animation}`}>
          <img className="rune" src={rune} alt="" />
          <p className="testimonial-text">
            "{testimonials[currentTestimonial]?.text}"
          </p>
          <p className="testimonial-name">
            - {testimonials[currentTestimonial]?.name}
          </p>
        </div>
        <button className="next" onClick={nextTestimonial}>
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
