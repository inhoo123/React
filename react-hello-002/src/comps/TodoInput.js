import { useState } from "react";
const TodoInput = ({ titles, setTitles }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        onChange={(e) => setTitle(e.target.value)}
        placeholder="TO DO..."
      />
      <button onClick={() => setTitles([...titles, title])}>추가</button>
    </>
  );
};
export default TodoInput;
