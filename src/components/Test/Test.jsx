import React, { useEffect, useState } from "react";
import Demo from "../../../demoText.json";
import "./test.css";


function Test() {
  const [clickAns, setClickAns] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  const [quizData, setQuizData] = useState();

  useEffect(() => {
    setQuizData(Demo.slice(0, 5));
  }, []);

  const handleNext = () => {
    setQuestionNum(questionNum + 1);
    setClickAns(null);
  };

  const handleBack = () => {
    setQuestionNum(questionNum - 1);
    setClickAns();
  };

  const handleClickAns = (ans) => {
    setClickAns(ans);
    const updatedQuizData = [...quizData];
    updatedQuizData[questionNum].userAns = ans;
    updatedQuizData[questionNum].isCorrect =
      ans == updatedQuizData[questionNum].trueAns;
    setQuizData(updatedQuizData);
  };



  const handleFinish = (quiz) => {
    console.log(quizData);
    
  };

  return (
    <div className="test-container">
      <div className="nav-quiz">
        <div className="right-side-nav">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png"
            alt="forward"
          />
        </div>

        {/* <div className="center-nav">
          <div className="timer-quiz">21:32</div>
        </div> */}

        <div className="left-side-nav">
          <div className="finish-quiz-button">סיים מבחן</div>
        </div>
      </div>
      <div className="question-context">
        <h3 className="question-text">
          {quizData && quizData[questionNum].question}
        </h3>
      </div>
      <br />
      <br />
      <div className="circles-questions">
        {quizData &&
          quizData.map((question, index) => (
            <div
              key={index}
              className={`circle-question ${
                quizData && quizData[index].userAns !== "" ? "circle-mark" : ""
              }`}
              onClick={() => {
                setQuestionNum(index);
                setClickAns();
              }}
            >
              <h5>{index + 1}</h5>
            </div>
          ))}
      </div>
      <div className="answer-context">
        <div
          className={`answer-box ${
            clickAns === 0 || (quizData && quizData[questionNum]?.userAns === 0)
              ? "answer-mark"
              : ""
          }`}
          onClick={() => handleClickAns(0)}
        >
          <div
            className={`circle-fill ${
              clickAns === 0 ||
              (quizData && quizData[questionNum]?.userAns === 0)
                ? "circle-mark"
                : ""
            }`}
          ></div>
          <h4 className="answer-text">
            {quizData && quizData[questionNum].answers[0]}
          </h4>
        </div>

        <div
          className={`answer-box ${
            clickAns === 1 || (quizData && quizData[questionNum]?.userAns === 1)
              ? "answer-mark"
              : ""
          }`}
          onClick={() => handleClickAns(1)}
        >
          <div
            className={`circle-fill ${
              clickAns === 1 ||
              (quizData && quizData[questionNum]?.userAns === 1)
                ? "circle-mark"
                : ""
            }`}
          ></div>
          <h4 className="answer-text">
            {quizData && quizData[questionNum].answers[1]}
          </h4>
        </div>

        <div
          className={`answer-box ${
            clickAns === 2 || (quizData && quizData[questionNum]?.userAns === 2)
              ? "answer-mark"
              : ""
          }`}
          onClick={() => handleClickAns(2)}
        >
          <div
            className={`circle-fill ${
              clickAns === 2 ||
              (quizData && quizData[questionNum]?.userAns === 2)
                ? "circle-mark"
                : ""
            }`}
          ></div>
          <h4 className="answer-text">
            {quizData && quizData[questionNum].answers[2]}
          </h4>
        </div>

        <div
          className={`answer-box ${
            clickAns === 3 || (quizData && quizData[questionNum]?.userAns === 3)
              ? "answer-mark"
              : ""
          }`}
          onClick={() => handleClickAns(3)}
        >
          <div
            className={`circle-fill ${
              clickAns === 3 ||
              (quizData && quizData[questionNum]?.userAns === 3)
                ? "circle-mark"
                : ""
            }`}
          ></div>
          <h4 className="answer-text">
            {quizData && quizData[questionNum].answers[3]}
          </h4>
        </div>
      </div>

      <div className="btn-back-next">
        {questionNum > 0 && (
          <button className="arrow-btn" onClick={handleBack}>
            הקודם
          </button>
        )}
        {questionNum < 4 && (
          <button className="arrow-btn" onClick={handleNext}>
            הבא
          </button>
        )}
        {questionNum == 4 && (
          <button className="arrow-btn" onClick={() => handleFinish(quizData)}>
            הגש
          </button>
        )}
      </div>
    </div>
  );
}

export default Test;
