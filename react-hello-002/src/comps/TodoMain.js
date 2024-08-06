import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoMain = () => {
  const [titles, setTitles] = useState([
    "체육관가기",
    "청구서 정리",
    "길동이 만나기",
    "계란 사기",
    "HTML 책 읽기",
    "책상정리",
  ]);
  return (
    <>
      <TodoInput titles={titles} setTitles={setTitles} />
      <TodoList titles={titles} />
    </>
  );
};
export default TodoMain;
