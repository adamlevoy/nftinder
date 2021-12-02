import React from 'react'
import Login from './components/Login';

const Home = () => {
  return (
    <main className="home">
      <div className="wrapper">
        <h1>😍 NFTinder</h1>
        <h2>Friendly NFT discovery</h2>
        <div>
          <Login />
        </div>
      </div>
    </main>
  )
}

export default Home
