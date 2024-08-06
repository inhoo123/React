/**
 *
 * @param
 * Main 컴포넌트에서 전달한names 라는 이름이 변수(배열)를
 * List 컴포넌트에서 사용하기 위하여 받는 방법
 * @returns
 */
const TodoList = ({ titles }) => {
  //  const names = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];
  const todoLists = titles.map((title) => <li>{title}</li>);
  return (
    <div>
      <h3>리스트입니다</h3>
      <ul>{todoLists}</ul>
    </div>
  );
};
export default TodoList;
