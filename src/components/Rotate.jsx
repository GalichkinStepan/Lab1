import React, { useEffect, useState } from "react";

const Rotate = function (props) {

    const [sizeImg, setCrop] = useState({ aspect: 16 / 9 });

    function rotate() {

        let ctx = canvasRef.current.getContext("2d");
        let image = document.getElementById("mainImage");
        console.log(image);

        ctx.drawImage(image, 0, 0);

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        canvasRef.current.width = image.width;
        canvasRef.current.height = image.height;

        console.log(image.length + " " + image.width);

        ctx.save();
        ctx.translate(canvasRef.current.width / 2, canvasRef.current.height / 2);
        //setRotation(rotation + 90);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(image, -image.width / 2, -image.width / 2);
        ctx.restore();

        setMainImageURL(canvasRef.current.toDataURL());
    }

    return (
        <div>
            <button onClick={() => rotate()}>Rotate</button>
        </div>
    );
};

export default Rotate;