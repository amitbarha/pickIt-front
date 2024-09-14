import React, { useEffect, useState } from "react";
import Demo from "../../../demoText.json";
import "./exercise-quiz.css";

function ExerciseQuiz() {
  const [clickAns, setClickAns] = useState(null);
  const [questionNum, setQuestionNum] = useState(0);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Limiting to 10 questions
    setQuizData(Demo.slice(0, 10));
  }, []);

  const handleNext = () => {
    if (questionNum < quizData.length - 1) {
      setQuestionNum(questionNum + 1);
      setClickAns(null);
    }
  };

  const handleBack = () => {
    if (questionNum > 0) {
      setQuestionNum(questionNum - 1);
      setClickAns(null);
    }
  };

  const handleClickAns = (ans) => {
    const updatedQuizData = [...quizData];
    if (updatedQuizData[questionNum]) {
      updatedQuizData[questionNum].userAns = ans;
      updatedQuizData[questionNum].isCorrect =
        ans === updatedQuizData[questionNum].trueAns;
      setQuizData(updatedQuizData);
      setClickAns(ans);
    }
  };

  if (!quizData || quizData.length === 0 || !quizData[questionNum]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exercise-container">
      <div className="question-context">
        <h3 className="question-text">
          {quizData[questionNum]?.question}
        </h3>
      </div>
      <br />
      <div className="answer-context">
        {quizData[questionNum]?.answers.map((answer, index) => (
          <div
            key={index}
            className={`answer-box ${
              clickAns === index || quizData[questionNum]?.userAns === index
                ? quizData[questionNum].isCorrect
                  ? "correct-answer"
                  : "wrong-answer"
                : ""
            }`}
            onClick={() => handleClickAns(index)}
          >
            <div
              className={`circle-fill ${
                clickAns === index || quizData[questionNum]?.userAns === index
                  ? quizData[questionNum].isCorrect
                    ? "correct-circle"
                    : "wrong-circle"
                  : ""
              }`}
            ></div>
            <h4 className="answer-text">{answer}</h4>
          </div>
        ))}
      </div>

      {quizData[questionNum]?.isCorrect && (
        <div className="full-description">
          {quizData[questionNum]?.description}
        </div>
      )}

      <div className="btn-back-next">
        {questionNum > 0 && (
          <button className="arrow-btn" onClick={handleBack}>
            הקודם
          </button>
        )}
        {questionNum < quizData.length - 1 && (
          <button className="arrow-btn" onClick={handleNext}>
            הבא
          </button>
        )}
      </div>
    </div>
  );
}

export default ExerciseQuiz;
