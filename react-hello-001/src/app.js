// react 에서 css 파일을 import 기본문법
import Main from "./comps/main";
import "./css/App.css";
const App = () => {
  return (
    <body>
      <header class="main">
        <h1>나의 첫 React 프로젝트</h1>
      </header>
      <section className="App">
        <Main />
      </section>
    </body>
  );
};
// React 컴포넌트는 반드시 함수 자체를 export 해야 한다
export default App;
