import React, { useEffect } from "react";
import { PIXEL_WIDTH } from "../constants";

function Canvas({imgSrc, setColors}) {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        if (!imgSrc) return;
        
        const ctx = canvasRef.current.getContext("2d");

        const img = new Image();
        img.src = imgSrc;
        img.addEventListener("load", () => {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(img, 0, 0, img.width * 0.3, img.height * 0.3);

            getPixelArt(ctx);
        });
    }, [imgSrc]);

    function getPixelArt(ctx) {
        let colors = [];

        for(let i = 0; i < (canvasRef.current.height / PIXEL_WIDTH); i++) {
            colors.push([[]]);
            for(let j = 0; j < (canvasRef.current.width / PIXEL_WIDTH); j++) {
                const color = getPixelValue(ctx, i * PIXEL_WIDTH, j * PIXEL_WIDTH, PIXEL_WIDTH);
                colors[i][j] = color;
            }
        }

        setColors(colors);
    }

    function getPixelValue(ctx, top, left, width) {
        const imageData = ctx.getImageData(left, top, width, width);
        const data = imageData.data;
        const rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;

        return rgb;
    }

    return (
        <canvas height={500} width={500} ref={canvasRef}></canvas>
    )
}

export default Canvas;