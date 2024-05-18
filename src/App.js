import "./App.css";
import gptLogo from "./assets/chatgpt.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />{" "}
            <span className="brand">ChatGpt</span>
            <button className="midBtn">
              <img className="addBtn" alt="" />
              New chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src=" " alt="" />
                What is programming ?
              </button>
              <button className="query">
                <img src=" " alt="" />
                What is programming ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
