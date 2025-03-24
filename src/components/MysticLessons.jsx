import axios from "axios";
import React, { Component } from "react";
import clock from "../img/clock.svg";
import check from "../img/check.svg";

class MysticLessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [] // Ініціалізація масиву курсів як порожнього
    };
  }

  componentDidMount() {
    // Отримуємо дані з API при монтуванні компонента
    axios
      .get("https://api.jsonbin.io/v3/b/679bedb2acd3cb34a8d5a54e")
      .then((res) => {
        this.setState({ courses: res.data.record }); // Зберігаємо отримані дані в стан
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  isImageAvailable(image) {
    try {
      require(`../img/${image}`);
      return true;
    } catch (err) {
      console.warn(`Image not found: ${image}`);
      return false;
    }
  }

  render() {
    const { courses } = this.state; // Отримуємо курси з стану
    return (
      <div id="mysticLessons">
        <div className="sorceryBox">
          <h2>Курси магії</h2>
          <div className="course-container">
            {courses.map((course, index) => (
              <div key={index} className="course-row">
                <div className="course-image">
                  {this.isImageAvailable(course.image) ? (
                    <img
                      src={require(`../img/${course.image}`)}
                      alt="Курс магії"
                    />
                  ) : (
                    <p>Зображення недоступне</p>
                  )}
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <h3>Для кого:</h3>
                  <ul>
                    {course.audience.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="course-details">
                    <div className="detail-item">
                      <span>
                        <img src={clock} alt="clock" />
                      </span>{" "}
                      {course.date}
                    </div>
                    <div className="detail-item">
                      <span>
                        <img src={check} alt="check" />
                      </span>{" "}
                      {course.potions}
                    </div>
                  </div>
                  <div className="course-buttons">
                    <button className="primary-btn">Записатися на курс</button>
                    <button className="secondary-btn">
                      Детальніше про курс
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MysticLessons;
