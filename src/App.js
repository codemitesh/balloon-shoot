import "./App.css";
import { useState } from "react";

function App() {
  const [balloon_1, setballoon_1] = useState(false);
  const [balloon_2, setballoon_2] = useState(false);
  const [balloon_3, setballoon_3] = useState(false);
  const [balloon_4, setballoon_4] = useState(false);
  const [balloon_5, setballoon_5] = useState(false);

  const restore_1 = () => {
    setballoon_1(false);
  };
  const restore_2 = () => {
    setballoon_2(false);
  };
  const restore_3 = () => {
    setballoon_3(false);
  };
  const restore_4 = () => {
    setballoon_4(false);
  };
  const restore_5 = () => {
    setballoon_5(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.input.value;
    e.stopPropagation();
    console.log(data);

    if (data === "1") {
      setballoon_1(true);
    }
    if (data === "2") {
      setballoon_2(true);
    }
    if (data === "3") {
      setballoon_3(true);
    }
    if (data === "4") {
      setballoon_4(true);
    }
    if (data === "5") {
      setballoon_5(true);
    }
    e.target.input.value = "";
  };

  return (
    <div className="App">
      <div className="one">
        <div className="div1">Empty Div</div>
        <div className="div12">
          <div className="div221 innerdiv" hidden={!balloon_1} onClick={restore_1}></div>
          <div className="div222 innerdiv" hidden={!balloon_2} onClick={restore_2}></div>
          <div className="div223 innerdiv" hidden={!balloon_3} onClick={restore_3}></div>
          <div className="div224 innerdiv" hidden={!balloon_4} onClick={restore_4}></div>
          <div className="div225 innerdiv" hidden={!balloon_5} onClick={restore_5}></div>
        </div>
      </div>
      <div></div>
      <div className="div2">
        <div className="div21">Balloons</div>
        <div className="div221" hidden={balloon_1}></div>
        <div className="div222" hidden={balloon_2}></div>
        <div className="div223" hidden={balloon_3}></div>
        <div className="div224" hidden={balloon_4}></div>
        <div className="div225" hidden={balloon_5}></div>
      </div>
      <div className="div3">
        <div className="div31">
          <form onSubmit={handleSubmit}>
            <input type="text" name="input" className="input" autocomplete="off" placeholder="Enter a balloon number"/>
            <br />
            <button className="button">Shoot!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;