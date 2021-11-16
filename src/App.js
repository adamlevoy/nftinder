import './App.css';
import { useState } from 'react';
import { useFetchData } from './api/useFetchData'

const openSeaBaseUrl = "https://api.opensea.io/api/v1/assets";
const openSeaApiOptions = {method: 'GET'};

function App() {
  const [ data, loading ] = useFetchData({
    baseUrl: openSeaBaseUrl,
    limit: "?limit=50",
    options: openSeaApiOptions
  });
  const [ count, setCount ] = useState(0);

  if(loading) return (
    <div className="wrapper">
      <h1>🔥NFTinder🔥</h1>
      <div className="imgWrapper">
        Loading...
      </div>
    </div>
  )

  return (
    <div className="wrapper">
      <h1>🔥NFTinder🔥</h1>
      <div className="showcase">
        <h2>{data.assets[count].name}</h2>
        <div className="imgWrapper">
        {data.assets[count].image_url ? <img src={data.assets[count].image_url} alt="" /> : <h3>No image ☠️</h3>}
        </div>
      </div>
      <div className="toggleWrapper">
        <button onClick={() => setCount(initialCount => initialCount + 1)}>🧊</button>
        <button onClick={() => setCount(initialCount => initialCount + 1)}>🔥</button>
      </div>
      <a href={data.assets[count].permalink} target="_blank" rel="noreferrer">View Listing</a>


      <div className="details">
        <h3>Details</h3>
        <p><span>Name:</span>{data.assets[count].name}</p>
        <p><span>Collection:</span>{data.assets[count].collection.name}</p>
        {data.assets[count].description ? <p><span>Description:</span> {data.assets[count].description}</p> : <p><span>Description:</span>none</p>}
        <p><span>Creator:</span>{data.assets[count].creator.user.username}</p>
        {data.assets[count].creator.image_thumbnail_url ? <img className="creatorAvatar" src={data.assets[count].creator.image_thumbnail_url} alt=""/> : null}
      </div>
    </div>
  );
}

export default App;
