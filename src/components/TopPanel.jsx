import React, { useState } from "react";
import DownloadComponent from "./DownloadComponent";
import UploadComponent from './UploadComponent';

const TopPanel = function (props) {

    return (
        <div>
            <UploadComponent setImage={props.setMainImage} />
            <button onClick={() => props.setMainImage(null)}>Remove</button>
            <DownloadComponent image={props.mainImage} />
        </div>
    );
};

export default TopPanel;