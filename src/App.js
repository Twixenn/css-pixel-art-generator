import React from "react";

import classnames from "classnames";

import Canvas from "./components/Canvas";
import DragAndDrop from "./components/DragAndDrop";
import PixelArt from "./components/PixelArt";

import "./sass/App.scss";

function App() {
  const [imgSrc, setImgSrc] = React.useState(null);
  const [colors, setColors] = React.useState(null);

  return (
    <div className={classnames("App", {"has-img": imgSrc})}>
      <DragAndDrop onFileLoaded={setImgSrc} />
      <Canvas imgSrc={imgSrc} setColors={setColors} />
      <PixelArt pixels={colors} />
    </div>
  );
}

export default App;
