import React, { useState } from 'react';
import Crop from './components/Crop';
import ToolPanel from './components/ToolPanel';
import TopPanel from './components/TopPanel';

function App() {

    const [mainImage, setMainImage] = useState(null);

  return (
      <div className="App">
          <TopPanel mainImage={mainImage} setMainImage={setMainImage} />
          <ToolPanel mainImage={mainImage} setMainImage={setMainImage} />

          {mainImage && (
              <div>
                  <img
                      alt="not found"
                      src={URL.createObjectURL(mainImage)}
                  />
                  <br />
              </div>
          )}
          <Crop src={mainImage} setSrc={setMainImage} />
    </div>
  );
}

export default App;
