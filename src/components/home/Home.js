import React from 'react'
import './styles.css'

const Home = () => {
  return (
    <>
      <div className="home-interiors-section">
        <div className="image-container">
          <img src={'/img7.jpeg'} alt="Home Interior" />
        </div>
        <div className="text-container">
          <h2>Get personalised home interiors</h2>
          <h3>in just <span className="highlight">50 days</span></h3>
          <button className="cta-button">SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
      </div>
    </>
  )
}

export default Home
