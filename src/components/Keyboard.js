import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Keyboard = () => {
  const [currentValue, setCurrentValue] = useState({
    ㅇ: "ㅇ",
    ㅏ: "ㅏ",
  });
  const inputRef = React.createRef();
  const [result, setResult] = useState("");
  const { ㅇ, ㅏ } = currentValue;
  const onChange = (e) => {
    const { value, name } = e.target;
    setCurrentValue({
      ...currentValue,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const onClickgetValue = (e) => {
    const { value } = e.target;
    setResult(result + value);
    console.log("str 배열에서 char의 index값을 반환 ", value.indexOf());
    console.log(
      "str문자열의 index에 해당하는 문자의 유니코드를 반환함 ",
      value.charCodeAt(0)
    );
    console.log(
      "입력한 유니코드에 해당하는 문자를 반환함 ",
      String.fromCharCode(value.charCodeAt(0))
    );
    console.log();
    console.log(value);
    console.log(result);
    // console.log(currentValue);
    // console.log(inputRef.current);
  };
  return (
    <div>
      <input type={"text"} onChange={() => setResult} value={result} />
      <input
        ref={inputRef}
        name="ㅇ"
        onChange={onChange}
        onClick={onClickgetValue}
        value={ㅇ}
        type={"button"}
      />
      <input
        ref={inputRef}
        name="ㅏ"
        onChange={onChange}
        onClick={onClickgetValue}
        value={ㅏ}
        type={"button"}
      />
    </div>
  );
};

export default Keyboard;
