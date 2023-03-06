import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Crop = (props) => {
    const [setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });

    const handleFileChange = (e) => {
        props.setSrc(URL.createObjectURL(e.target.files[0]));
    };

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
    }
    return (
        <div className="container">
            <div className="row">
                {props.src && (
                    <div>
                        <ReactCrop crop={crop} onChange={setCrop}>
                            <img id="result" src={URL.createObjectURL(props.src)} alt="description" onLoad={setImage} />
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
                        border: "1px solid black",
                        objectFit: "contain"
                    }}
                ></canvas>
            </div>
        </div>
    );
};
export default Crop;