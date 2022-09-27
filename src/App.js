import React from "react";

import classnames from "classnames";

import Canvas from "./components/Canvas";
import DragAndDrop from "./components/DragAndDrop";
import PixelArt from "./components/PixelArt";

import "./sass/App.scss";

function App() {
  const [imgSrc, setImgSrc] = React.useState(null);
  const [colors, setColors] = React.useState(null);

  function clear() {
    setImgSrc(null);
    setColors(null);
  }

  return (
    <div className={classnames("App", {"has-img": imgSrc})}>
      <DragAndDrop onFileLoaded={setImgSrc} />
      <Canvas imgSrc={imgSrc} setColors={setColors} />
      <PixelArt pixels={colors} clear={clear} />
    </div>
  );
}

export default App;
