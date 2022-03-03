import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./ClipBoard.css";

const ClipBoard = () => {
  const [initext, setInitext] = useState("복사 할 내용");
  const copy = () => {
    navigator.clipboard.writeText(initext);
    alert("복사되었습니다.");
  };
  return (
    <div>
      <h1>ClipBoard</h1>
      <div className="copy-area">
        <pre className="copy-area-pre">{initext}</pre>
        <div className="copy-icon-wrapper" onClick={copy}>
          <Icon icon="fluent:copy-16-regular" style={{ fontSize: 16 }} />
        </div>
      </div>
    </div>
  );
};

export default ClipBoard;
