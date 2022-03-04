import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./ClipBoard.css";
import { useNavigate } from "react-router-dom";

const ClipBoard = () => {
  const navigate = useNavigate();
  const [initext, setInitext] = useState("복사 할 내용");
  const copy = () => {
    navigator.clipboard.writeText(initext);
    alert("복사되었습니다.");
  };
  const onClickInsert = (e) => {
    console.log(
      navigator.clipboard.addEventListener("paste", (e) => {
        const paste ='pasted:\n' +
        (e.clipboardData || window.clipboardData).getData('text');
    
      e.target.value = paste;
    
      // stop default paste
      e.preventDefault();
      })
    );
  };
  return (
    <div>
      <header>
        <h1>ClipBoard</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>

      <div className="copy-area">
        <pre className="copy-area-pre">{initext}</pre>
        <div className="copy-icon-wrapper" onClick={copy}>
          <Icon icon="fluent:copy-16-regular" style={{ fontSize: 16 }} />
        </div>
      </div>
      <button onClick={onClickInsert}>버튼</button>
    </div>
  );
};

export default ClipBoard;
