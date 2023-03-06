import React, { useState } from "react";
import DownloadComponent from "./DownloadComponent";
import UploadComponent from './UploadComponent';

const TopPanel = function (props) {

    return (
        <div>
            <UploadComponent setImage={props.setMainImage} />
            <DownloadComponent image={props.mainImage} />
            <button onClick={() => props.setMainImage(null)}>Remove</button>
            
        </div>
    );
};

export default TopPanel;