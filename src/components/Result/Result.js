import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import {
  faCopy,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Club from "../../common/api/Club.json";
import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const params = useParams();
  const club = Club[params.club];

  const url = window.location.href; // url 복사
  const copyAlert = () => {
    alert("링크 생성!");
  };

  const Return = () => {
    console.log("Return 호출");
    navigate("/Question");
  };

  if (!club) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  return (
    <div className="background_wrapper">
      <div className="wrapper" key={club.id}>
        <div className="container" style={ params.club === 'A' ? { height: '100%' } : { height : '100vh' } }>
          <div className="result_type">
            <h1 className="result_major">{club.id}</h1>
            <p className="result_subhead">{club.subhead}</p>
          </div>
          {club.clubs.map((item, index) => {
            return (
              <ul className="result_wrapper" key={index}>
                <li className="club_name">
                  <strong>{item.name}</strong>
                </li>
                <li className="club_act">{item.act}</li>
              </ul>
            );
          })}
          <div className="result_btn_box">
            <button className="start__button" onClick={() => Return()}>
              다시하기
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

export default Result;
