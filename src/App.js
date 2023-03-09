import React, { useState } from 'react';
import Crop from './components/Crop';
import Rotate from './components/Rotate';
import ToolPanel from './components/ToolPanel';
import TopPanel from './components/TopPanel';

function App() {

    const [mainImage, setMainImage] = useState(null);
    const [mainImageURL, setMainImageURL] = useState(null);
    const [appState, setAppState] = useState(null);

    function ImageURL() {
        if (mainImageURL == null)
            return URL.createObjectURL(mainImage);
        else
            return mainImageURL;
    }

  return (
      <div className="App">

          <TopPanel mainImage={mainImage} setMainImage={setMainImage} setAppState={setAppState} mainImageURL={mainImageURL} />


          {mainImage && (
              <div>
                  <img
                      alt="not found"
                      src={ImageURL()}
                  />
                  <br />
              </div>
          )}

          <Crop image={mainImage} setImage={setMainImage} imgURL={mainImageURL} setImageURL={setMainImageURL} setAppState={setAppState}/>

          <Rotate ImageURL={mainImageURL} setImageURL={setMainImageURL} />
    </div>
  );
}

export default App;
