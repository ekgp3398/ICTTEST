import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const url = window.location.href; // url 복사
  const copyAlert = () => {
    alert("링크 생성!");
  };

  const Start = () => {
    navigate("/Question");
  };
  return (
    <div className="background_wrapper">
      <div className="wrapper">
        <div className="container">
          <div className="middle">
            <h2 className="header">나에게 맞는 동아리는?</h2>
            <img
              className="club_icon"
              src="https://cdn-icons-png.flaticon.com/512/8310/8310173.png"
            />
            <p>총 7개의 질문을 통해</p>
            <p>나에게 맞는 동아리들을 추천해드려요.</p>
          </div>
          <div className="btn_box">
            <button className="start__button" onClick={() => Start()}>
              시작하기
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
            </button>
            <CopyToClipboard text={url}>
              <button className="start__button" onClick={copyAlert}>
                링크복사
                <FontAwesomeIcon icon={faCopy} className="icon" />
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
