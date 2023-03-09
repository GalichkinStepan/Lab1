import React, { useState } from "react";
import CropButton from "./CropButton";

const ToolPanel = function (props) {

    return (
        <div>
            <CropButton setAppState={props.setAppState}/>
        </div>
    );
};

export default ToolPanel;