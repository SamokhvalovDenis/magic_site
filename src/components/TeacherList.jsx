import axios from "axios";
import React, { Component } from "react";
import book from "../img/book.svg";

class TeacherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/v3/b/679d02c5acd3cb34a8d6165e")
      .then((res) => {
        this.setState({ teachers: res.data.record });
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
    const { teachers } = this.state;
    return (
      <div id="teacherList">
        <div className="teacherList__inner">
          <img src={book} alt="" />
          <h2>Викладачі</h2>
          <img src={book} alt="" />
        </div>

        <div className="teacher-container">
          {teachers.map((teacher, index) => (
            <div key={index} className="teacher-card">
              {this.isImageAvailable(teacher.image) ? (
                <img
                  src={require(`../img/${teacher.image}`)}
                  alt={teacher.name}
                />
              ) : (
                <p>{teacher.description}</p>
              )}
              <div>
                <h3>{teacher.name}</h3>
                <p>{teacher.position}</p>
                <p>{teacher.description}</p>
              </div>
              <button>Детальніше</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TeacherList;
