import React, { useState } from "react";
import { saveAs } from 'file-saver'

const DownloadComponent = function (props) {

    const downloadImage = () => {
        saveAs(URL.createObjectURL(props.image))
    }

    return (
        <div>
            <button onClick={downloadImage} disabled={!(props.image)}>Download!</button>
        </div>
    );
};

export default DownloadComponent;