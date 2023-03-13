import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Crop = (props) => {

    const [crop, setCrop] = useState({ aspect: 16 / 9 });

    function getCroppedImg() {

        const canvas = document.createElement('canvas'); 
        const image = document.getElementById("result");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const imageWidthRatio = image.naturalWidth / image.width;
        const imageHeightRatio = image.naturalHeight / image.height;

        canvas.width = crop.width;
        canvas.height = crop.height;
        canvas.style.objectFit = "contain";

        ctx.drawImage(
            image,
            crop.x * imageWidthRatio,
            crop.y * imageHeightRatio,
            crop.width * imageWidthRatio,
            crop.height * imageHeightRatio,
            0,
            0,
            crop.width,
            crop.height
        );

        props.setImageURL(canvas.toDataURL());
        props.setAppState(null);
    }
    return (
        <div className="container">
            <div className="row">
                {props.imageURL && (
                    <div>
                        <ReactCrop crop={crop} onChange={setCrop}>
                            <img id="result" src={props.imageURL} alt="not found" />
                        </ReactCrop>
                        <button className="btn btn-danger" onClick={getCroppedImg}>
                            Crop image
                        </button>
                    </div>
                )}
                
            </div>
        </div>
    );
};
export default Crop;