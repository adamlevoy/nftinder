import './App.css';
import { useState, createContext } from 'react';
import { useFetchData } from './api/useFetchData';
import Header from './components/Header';

const UserContext = createContext();

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
      <Header />
      <div className="imgWrapper">
        Loading...
      </div>
    </div>
  )

  return (
    <UserContext.Provider
      value={{
        user: true
    }}>
    <div className="wrapper">
      <Header />
      <div className="showcase">
        <div className="imgWrapper">
        <img src={data.assets[count].image_url} alt="" />
        </div>
        <h2>{data.assets[count].name}</h2>
      </div>
      <div className="toggleWrapper">
        <button className="btnToggle" onClick={() => setCount(initialCount => initialCount + 1)}>🤮</button>
        <button className="btnToggle" onClick={() => setCount(initialCount => initialCount + 1)}>😍</button>
      </div>
      <a href={data.assets[count].permalink} target="_blank" rel="noreferrer">View Listing</a>


      <div className="details">
        <h3>Details</h3>
        <p><span>Name:</span>{data.assets[count].name}</p>
        <p><span>Collection:</span>{data.assets[count].collection.name}</p>
        {data.assets[count].description ? <p><span>Description:</span> {data.assets[count].description}</p> : <p><span>Description:</span>none</p>}
        <p><span>Creator:</span>{data.assets[count].creator.user.username}</p>
        {data.assets[count].creator.profile_img_url ? <img className="creatorAvatar" src={data.assets[count].creator.profile_img_url} alt=""/> : null}
      </div>
    </div>
  </UserContext.Provider>
  );
}

export default App;
