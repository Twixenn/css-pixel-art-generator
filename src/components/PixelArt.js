import React, { useEffect } from "react";

import styles from "../sass/constants.scss";
const PIXEL_WIDTH = parseInt(styles.PIXEL_WIDTH);

function PixelArt({pixels}) {
    const [shadow, setShadow] = React.useState(null);

    useEffect(() => {
        if(!pixels) return;

        // Loop through each pixel and create a box-shadow value representing it
        const shadow = pixels.map((row, rowIndex) => 
            row.map((color, columnIndex) => `${(columnIndex + 1) * PIXEL_WIDTH}px ${rowIndex * PIXEL_WIDTH}px ${color}`).join(", ")
        ).join(", ");

        setShadow(shadow);
    }, [pixels])

    return (
        <div className="pixel-artboard">
            <div 
                className="pixel" 
                style={{
                    boxShadow: shadow,
                    width: PIXEL_WIDTH,
                    height: PIXEL_WIDTH
                }}
            />
        </div>
    )
}

export default PixelArt;