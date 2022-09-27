import React from "react";

function Canvas() {
    const canvasRef = React.useRef(null);
    
    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default Canvas;