import React, { useState } from "react";
import UploadComponent from './UploadComponent';

const TopPanel = function (props) {

    return (
        <div>
            <UploadComponent setImage={props.setMainImage} />
            <button onClick={() => props.setMainImage(null)}>Remove</button>
        </div>
    );
};

export default TopPanel;