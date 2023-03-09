import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Crop = (props) => {
    const [setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });

    function getCroppedImg() {

        const canvas = document.getElementById("canvas"); 
        const image = document.getElementById("result");
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const imageWidthRatio = image.naturalWidth / image.width;
        const imageHeightRatio = image.naturalHeight / image.height;

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
                {props.image && (
                    <div>
                        <ReactCrop crop={crop} onChange={setCrop}>
                            <img id="result" src={URL.createObjectURL(props.image)} alt="description" onLoad={setImage} />
                        </ReactCrop>
                        <button className="btn btn-danger" onClick={getCroppedImg}>
                            Crop image
                        </button>
                    </div>
                )}
                <canvas
                    id="canvas"
                    width={crop.width}
                    height={crop.height}
                    style={{
                        objectFit: "contain"
                    }}
                ></canvas>
            </div>
        </div>
    );
};
export default Crop;