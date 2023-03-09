import React, { useState } from "react";
import DownloadComponent from "./DownloadComponent";
import UploadComponent from './UploadComponent';

const TopPanel = function (props) {

    return (
        <div>
            <UploadComponent setImage={props.setMainImage} />
            <DownloadComponent imageURL={props.mainImageURL}/>
            <button onClick={() => props.setMainImage(null)}>Remove</button>
            
        </div>
    );
};

export default TopPanel;