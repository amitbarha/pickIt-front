import React from "react";
import "./exrecise.css";
import { Link } from "react-router-dom";

function Exercise() {
  return (
    <div className="exercise-container">
      <div className="questions-topics">
        <Link to={"/ExerciseQuiz"} className="topic-btn">
          <div className="ex-btn-context">
            <img
              width="64"
              height="64"
              src="https://res.cloudinary.com/deiofeueo/image/upload/v1725215659/%D7%A2%D7%99%D7%A6%D7%95%D7%91_%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D__1_-removebg-preview_ppphmr.png"
              alt="external-homework-university-flaticons-flat-flat-icons-2"
            />{" "}
            <h3> פרק הידע הטכני </h3>
          </div>
        </Link>

        <Link to={"/Exercise"} className="topic-btn">
          <div className="ex-btn-context">
            <img
              width="100"
              height="100"
              src="https://res.cloudinary.com/deiofeueo/image/upload/v1725214347/%D7%A2%D7%99%D7%A6%D7%95%D7%91_%D7%9C%D7%9C%D7%90_%D7%A9%D7%9D-removebg-preview_jvjirk.png"
              alt="external-homework-university-flaticons-flat-flat-icons-2"
            />{" "}
            <h3>
              {" "}
              פרק החוקה
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
          </div>
        </Link>

        <Link to={"/Exercise"} className="topic-btn">
          <div className="ex-btn-context">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/windy-weather--v1.png"
              alt="windy-weather--v1"
            />
            <h3> פרק המטאורולוגיה</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Exercise;
