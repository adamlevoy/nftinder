import './App.css';
import { useState } from 'react';
import { useFetchData } from './api/useFetchData'

const openSeaBaseUrl = "https://api.opensea.io/api/v1/assets";
const openSeaApiOptions = {method: 'GET'};

function App() {
  const [ data, loading ] = useFetchData({
    baseUrl: openSeaBaseUrl,
    options: openSeaApiOptions
  });
  const [ count, setCount ] = useState(0);

  if(loading) return (
    <div>
      Loading...
    </div>
  )

  return (
    <div className="wrapper">
      <h1>🔥NFTinder🔥</h1>
      <h2>{data.assets[count].name}</h2>
      <div className="imgWrapper">
      <img src={data.assets[count].image_url} alt="" />
      </div>
      <button onClick={() => setCount(initialCount => initialCount + 1)}>Next</button>
    </div>
  );
}

export default App;
