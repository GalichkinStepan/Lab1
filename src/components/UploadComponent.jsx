import React, { useState } from "react";

const UploadComponent = function (props){

    return (
        <div>
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    props.setImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadComponent;