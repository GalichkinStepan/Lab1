import React, { useState, useRef } from 'react';
import Crop from './components/Crop';
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


function App() {

    const [mainImage, setMainImage] = useState(null);
    const [mainImageURL, setMainImageURL] = useState(null);
    const [appState, setAppState] = useState(null);

    //const [rotation, setRotation] = useState(0);

    var rotation = 0;

    const canvasRef = useRef(null);

    const downloadImage = () => {
        saveURL();
        saveAs(mainImageURL);
    }

    function saveURL() {
        let image = document.getElementById("mainImage");
        htmlToImage.toJpeg(image)
            .then(function (dataUrl) {
                setMainImageURL(dataUrl);
            });
    }

    function RotateMainImage() {
        let image = document.getElementById("mainImage");
        rotation += 90;
        image.style.transform = 'rotate(' + rotation + 'deg)';
    }

    function WhiteBlack(k) {
        let image = document.getElementById("mainImage");
        image.style.filter += "grayscale(" + k + ")";
    }

    function Brightness(k) {
        let image = document.getElementById("mainImage");
        image.style.filter += "brightness(" + k + ")";
    }

    function Contrast(k) {
        let image = document.getElementById("mainImage");
        image.style.filter += "contrast(" + k + ")";
    }

    function Blur(k) {
        let image = document.getElementById("mainImage");
        image.style.filter += "blur(" + k + "px)";
    }

    function Invert(k) {
        let image = document.getElementById("mainImage");
        image.style.filter += "invert(" + k + "%)";
    }

    function CheckNew() {
        saveURL();
    }

  return ( 
      <div className="App">
          <div className="TopPanel">

              <div className="Upload">
                  <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                          console.log(event.target.files[0]);
                          setMainImage(event.target.files[0]);
                          setMainImageURL(URL.createObjectURL(event.target.files[0]));
                      }}
                  />
              </div>

              <div className = "Download">
                  <button onClick={downloadImage} disabled={!(mainImageURL)}>Download</button>
              </div>

            <button onClick={() => {
                setMainImageURL(null);
                setMainImage(null);
            }
            }>Remove</button>
          </div>


          {mainImageURL && appState== null && (
              <div>
                  <img
                      id ="mainImage"
                      alt="not found"
                      src={mainImageURL}
                      
                  />
                  <br />
              </div>
          )}

          {appState == "Crop" && (
              <Crop imageURL={mainImageURL} setImageURL={setMainImageURL} setAppState={setAppState} />     
          )}

          <div className="ToolPanel">
              <button onClick={() => { saveURL(); setAppState("Crop");}}> Crop</button>
              <button onClick={() => { WhiteBlack(5) }}> WhiteBlack</button>
              <button onClick={() => { Brightness(3) }}> Brightness</button>
              <button onClick={() => { Contrast(20) }}> Contrast</button>
              <button onClick={() => { Blur(1) }}> Blur</button>
              <button onClick={() => { Invert(100) }}> Invert</button>
              <button onClick={() => { CheckNew() }}>Check</button>
          </div>

    </div>
  );
}

export default App;
