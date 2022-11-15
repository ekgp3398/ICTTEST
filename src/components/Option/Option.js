import React, { useEffect, useState } from "react";
import "./Option.css";
import { useNavigate } from "react-router-dom";
import LoadingSpin from "react-loading-spin";
import Questions from "../../common/api/Question.json";

const Option = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const TOTAL_SLIDES = 7;
  const navigate = useNavigate();
  const [club, setClub] = useState([]);

  const Answer = (props) => {
    setClub(club + Questions[num].answers[props].type);
    setNum(num + 1);
    setCurrentSlide(currentSlide + 1);
    console.log(club);
  };

  const clubChecker = () => {
    setLoading(true);
    let map = {};
    let result;
    for (let i = 0; i < club.length; i++) {
      if (club[i] in map) {
        map[club[i]] += 1;
      } else {
        map[club[i]] = 1;
      }
    }
    for (let count in map) {
      if (map[count] > 2) {
        result = count;
      }
    }
    setTimeout(() => {
      navigate(`/result/${result}`);
    }, 3000);
  };
  useEffect(() => {
    currentSlide > TOTAL_SLIDES && clubChecker();
  }, [currentSlide]);

  return (
    <div className="background_wrapper">
      {!loading ? (
        <div className="body_container">
          <section className="container">
            <div className="slider">
              {Questions.filter((item) => item.id === currentSlide).map(
                (item, index) => (
                  <div className="content" key={index}>
                    <div className="top">
                      <div className="counter">
                        <span className="current_progress">{currentSlide}</span>
                        <span className="end_progress">/{TOTAL_SLIDES}</span>
                      </div>
                      <h1 className="club_question">{item.question}</h1>
                    </div>
                    <article className="answer_container">
                      <button className="answer_btn" onClick={() => Answer(0)}>
                        {item.answers[0].content}
                      </button>
                      <button className="answer_btn" onClick={() => Answer(1)}>
                        {item.answers[1].content}
                      </button>
                      <button className="answer_btn" onClick={() => Answer(2)}>
                        {item.answers[2].content}
                      </button>
                    </article>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      ) : (
        <div className="body_container">
          <div className="container">
            <div className="loading__container">
              <LoadingSpin primaryColor="#ed6174" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Option;
