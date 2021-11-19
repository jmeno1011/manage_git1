import React, { useEffect, useRef, useState } from "react";
import { quiz } from "./quiz";

const Tab4 = () => {
  const [currentNo, setCurrentNo] = useState(0);
  const [saveScore, setSaveScore] = useState([]);
  const [bdisum, setBdisum] = useState(0);
  const [showResult, setShowResult] = useState(false);
  let datas={}
  const handleClick = (score) => {
    setBdisum(bdisum=>bdisum+score);
    // console.log(currentNo);
    if(currentNo === quiz.length-1){
      setSaveScore((saveScore)=>[...saveScore, score]);
      setShowResult(true);
    }else{
      setCurrentNo((currentNo)=>currentNo+1);
      setSaveScore((saveScore)=>[...saveScore, score]);
    }
  };
  let cgi = 0;
  const sendScore = ()=>{
    if(bdisum<10){
      cgi=1;
    }else if(bdisum<16&&bdisum>=10){
      cgi =2;
    }else if(bdisum<24&&bdisum>=16){
      cgi=3;
    }else{
      cgi=4;
    }
    datas = {
      bdi_score:saveScore,
      bdisum: bdisum,
      cgi:cgi
    }
    // console.log(datas);
    alert("점수가 저장되었습니다.");
  }

  return (
    <>
      <h1>Tab4</h1>
      <div className="test-container">
            {showResult ? (
              <div className="test-app">
                <h1 className="test-result-header">테스트가 종료되었습니다.</h1>
                <p className="test-result-score">총점 : {bdisum}</p>
                <button className="test-btn" onClick={sendScore}> 점수 입력 </button>
                </div>
            ):(
            <div className="test-app">
              <div className="test-question-section">
                <h1 className="test-question-header">
                  <span>{quiz[currentNo].id}</span>/{quiz.length}
                </h1>
                <div className="test-question-text">
                  {quiz[currentNo].question}
                </div>
              </div>
              <div className="test-answer-section">
                {quiz[currentNo].answers.map((answer, index) => (
                  <button
                    key={index}
                    className="test-btn"
                    value={answer.text}
                    onClick={() => handleClick(answer.score)}
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </div>
            )}
          </div>
    </>
  );
};

export default Tab4;
