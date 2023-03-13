import React, { useEffect, useState } from "react";

const Rotate = function (props) {

    const [sizeImg, setCrop] = useState({ aspect: 16 / 9 });

    function rotate() {

        const canvas = document.createElement('canvas');
        const image = new Image();
        const ctx = canvas.getContext("2d");

        image.src = props.imageURL;

        canvas.width = sizeImg.width; 
        canvas.height = sizeImg.height; 
        canvas.style.objectFit = "contain";

        ctx.rotate(90 * Math.PI / 180);
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
        }

        props.setImageURL(canvas.toDataURL());
    }

    return (
        <div>
            <button onClick={() => rotate()}>Rotate</button>
        </div>
    );
};

export default Rotate;