import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [showAnimation, setShowAnimation] = useState(false);

  const onClick = event => {
    setShowAnimation(event.target.checked);
  };

  return (
    <div className="App">
      <input type="checkbox" onClick={onClick} />
      {<Button show></Button>}
      {showAnimation && <div>Hello</div>}
    </div>
  );
}

export default App;
