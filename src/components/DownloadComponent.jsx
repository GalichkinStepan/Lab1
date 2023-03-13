import React, { useState } from "react";
import { saveAs } from 'file-saver'

const DownloadComponent = function (props) {

    const downloadImage = () => {
        saveAs(props.imageURL);
    }

    return (
        <div>
            <button onClick={downloadImage} disabled={!(props.imageURL)}>Download!</button>
        </div>
    );
};

export default DownloadComponent;