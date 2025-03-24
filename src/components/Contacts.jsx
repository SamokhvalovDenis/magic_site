import React, { useState } from "react";
import phone from "../img/phone.svg";
import e_mail from "../img/e-mail.svg";
import schedule from "../img/schedule.svg";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Перевірка, чи всі поля заповнені
    if (!formData.name || !formData.email || !formData.question) {
      setMessage("Будь ласка, заповніть всі поля!");
      setMessageType("error");
    } else {
      setMessage("Форма успішно надіслана!");
      setMessageType("success");
    }

    // Показати повідомлення
    setMessageVisible(true);

    // Сховати повідомлення через 4 секунди
    setTimeout(() => {
      setMessageVisible(false);
    }, 4000);
  };

  return (
    <div id="contacts">
      <div className="contacts-container">
        <h2>Наші контакти</h2>
        <div className="contacts__inner">
          <div className="contacts-info">
            <div className="contact-item">
              <img src={phone} alt="" />
              <div className="contact-item__inner">
                <p>Телефон</p>
                <p>+380 50 123 45 67</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={e_mail} alt="" />
              <div className="contact-item__inner">
                <p>E-mail</p>
                <p>spellbinder@arcane.com</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={schedule} alt="" />
              <div className="contact-item__inner">
                <p>Режим роботи</p>
                <p>
                  Пн - Пт 9:00 - 18:00 <br />
                  Сб: 10:00 - 15:00 <br />
                  Нд: Вихідний
                </p>
              </div>
            </div>
          </div>
          <div className="contacts-form">
            <h3>Залишилися питання?</h3>

            <input
              type="text"
              name="name"
              placeholder="Ваше ім'я"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="question"
              rows="4"
              placeholder="Ваше питання"
              value={formData.question}
              onChange={handleChange}
            ></textarea>
            <button className="primary-btn" onClick={handleSubmit}>
              Надіслати
            </button>
          </div>
        </div>
      </div>

      {messageVisible && (
        <>
          <div className="form-message-overlay"></div>
          <div className={`form-message ${messageType} ${messageVisible ? "show" : ""}`}>
            {message}
          </div>
        </>
      )}
    </div>
  );
}
