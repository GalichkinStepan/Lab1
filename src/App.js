import React, { useState } from 'react';
import TopPanel from './components/TopPanel';


function App() {

    const [mainImage, setMainImage] = useState(null);

  return (
      <div className="App">
          <TopPanel mainImage={mainImage} setMainImage={setMainImage} />
          

          {mainImage && (
              <div>
                  <img
                      alt="not found"
                      src={URL.createObjectURL(mainImage)}
                  />
                  <br />
              </div>
          )}
    </div>
  );
}

export default App;
