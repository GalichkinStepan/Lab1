import React, { useState } from "react";

const CropButton = function (props) {
    return (
        <div>
            <button onClick={
                props.setAppState("Crop")
            }>Crop image</button>
        </div>
    );
};

export default CropButton;