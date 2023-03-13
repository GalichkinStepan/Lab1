import React, { useState, useRef } from 'react';
import Crop from './components/Crop';
import { saveAs } from 'file-saver';

const DrawOnCanvas = (props) => {

    return <canvas width={500} height={500} ref={props.propRef}></canvas>
}

function App() {

    const [mainImage, setMainImage] = useState(null);
    const [mainImageURL, setMainImageURL] = useState(null);
    const [appState, setAppState] = useState(null);

    const [rotation, setRotation] = useState(0);

    const myref = useRef(null);

    const downloadImage = () => {
        saveAs(mainImageURL);
    }

    function RotateMainImage() {
        let image = document.getElementById("mainImage");
        setRotation(rotation + 90);
        image.style.transform = 'rotate(' + rotation + 'deg)'; 
        setMainImageURL(image.src);
        
    }

    function RewriteURL() {
        let ctx = myref.current.getContext("2d");
        let image = document.getElementById("mainImage");
        console.log(image);

        ctx.drawImage(image, 0, 0); 

        ctx.clearRect(0, 0, myref.current.width, myref.current.height);

        myref.current.width = image.width;
        myref.current.height = image.height; 

        console.log(image.length + " " + image.width);

        ctx.save();
        ctx.translate(myref.current.width / 2, myref.current.height / 2);
        setRotation(rotation + 90);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(image, -image.width / 2, -image.width / 2);
        ctx.restore();

        setMainImageURL(myref.current.toDataURL());
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


          {mainImageURL && (
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
              <button onClick={() => { RotateMainImage() }}>Rotate</button>
              <button onClick={() => { setAppState("Crop") }}> Crop</button>
              <button onClick={() => { RewriteURL() }}>Check</button>
          </div>

          

          <DrawOnCanvas propRef={myref}/>

    </div>
  );
}

export default App;
