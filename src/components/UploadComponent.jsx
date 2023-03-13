import React, { useState } from "react";

const UploadComponent = function (props){

    return (
        <div className="Upload">
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    props.setImage(event.target.files[0]);
                    props.setImageURL(URL.createObjectURL(event.target.files[0]));
                }}
            />
        </div>
    );
};

export default UploadComponent;