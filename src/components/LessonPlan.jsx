import axios from "axios";
import React, { Component } from "react";

class LessonPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [] // Ініціалізація порожнього масиву для занять
    };
  }

  componentDidMount() {
    // Завантаження даних із JSON-API
    axios
      .get("https://api.jsonbin.io/v3/b/679e6abdacd3cb34a8d6a2af")
      .then((res) => {
        this.setState({ lessons: res.data.record.lessons }); // Збереження даних у стані
      })
      .catch((error) => {
        console.error("Помилка при завантаженні даних:", error);
      });
  }

  render() {
    const { lessons } = this.state;

    return (
      <div id="lessonPlan">
        <div className="lesson-container">
          <h2>Розклад занять</h2>
          <div className="lesson-cards">
            {lessons.map((lesson, index) => (
              <div key={index} className="lesson-card">
                <h3>{lesson.title}</h3>
                <p>Час: {lesson.time}</p>
                <p>Місце: {lesson.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LessonPlan;
