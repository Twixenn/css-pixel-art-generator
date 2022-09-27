import React from "react";

import classnames from "classnames";

function DragAndDrop({onFileLoaded}) {
    const [error, setError] = React.useState(null);
    const [dragState, setDragState] = React.useState(null);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop (e) {
        preventDefaults(e);
        setDragState(null);

        const dt = e.dataTransfer;
        const files = dt.files;

        setError(false);

        if([...files].length >= 1)
        {
            handleFile(files[0]);
        }
        
    }

    function handleFile (file) {
        let reader = new FileReader();

        reader.addEventListener("loadend", () => {
            const imgSrc = reader.result;
            onFileLoaded(imgSrc);
        });

        reader.readAsDataURL(file);

        reader.addEventListener("error", () => {
            setError("Could not load file");
        });
    }

    return (
        <div className={classnames("drag-and-drop", dragState)}
            onDragEnter={(e) => { preventDefaults(e); setDragState("hover"); }}
            onDragLeave={(e) => { preventDefaults(e); setDragState(null); }}
            onDragOver={preventDefaults}
            onDrop={handleDrop}
        >
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default DragAndDrop;