import React, { useState } from "react";
import CropButton from "./CropButton";

const ToolPanel = function (props) {

    return (
        <div>
            <CropButton image={props.mainImage} setImage={props.setMainImage}/>
        </div>
    );
};

export default ToolPanel;