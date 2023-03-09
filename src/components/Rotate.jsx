import React, { useState } from "react";

const Rotate = function (props) {

    function rotate() {

        var canvas = document.createElement('canvas');

        canvas.width = "1000"; 
        canvas.height = "1000"; 

        var img = document.createElement("img");
        img.src = props.ImageURL; 

        var ctx = canvas.getContext("2d");

        ctx.rotate(90 * Math.PI / 180); // rotate by 90 degrees
        ctx.drawImage(img, 100, 100); //draw it
        ctx.fill();

        props.setImageURL(canvas.toDataURL());
    }

    return (
        <button onClick={rotate()}></button>
    );
};

export default Rotate;