import React from "react";

import Canvas from "./components/Canvas";
import DragAndDrop from "./components/DragAndDrop";

import "./sass/App.scss";

function App() {
  const [imgSrc, setImgSrc] = React.useState(null);

  return (
    <div className="App">
      <DragAndDrop onFileLoaded={setImgSrc} />
      <Canvas imgSrc={imgSrc} />
    </div>
  );
}

export default App;
