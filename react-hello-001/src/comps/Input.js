import { useState } from "react";
const Input = ({ setNames }) => {
  // const userName = "홍길동";
  const age = "0";
  const [userName, setUserName] = useState("");
  return (
    <>
      <h3>입력화면</h3>
      <div>
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="이름을 입력해주세요"
        />
        <button onClick={() => setNames([...setNames, userName])}>추가</button>
      </div>
      <p>이름 :{userName}</p>
      <p>나이: {age + 30}</p>
    </>
  );
};
export default Input;
