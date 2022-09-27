import React, { useEffect } from "react";

function Canvas({imgSrc}) {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        if (!imgSrc) return;
        
        const ctx = canvasRef.current.getContext("2d");

        const img = new Image();
        img.src = imgSrc;
        img.addEventListener("load", () => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(img, 0, 0, img.width * 0.3, img.height * 0.3);
        });
    }, [imgSrc]);

    return (
        <canvas height={500} width={500} ref={canvasRef}></canvas>
    )
}

export default Canvas;