import React from 'react'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import heroimage from './images/Hero_image.png'
import mount from './images/mount.png'
import './index.css'
import Footer from './components/Footer'
import Connectus from './components/Connectus'
import Mapp from './components/Mapp'
import Stone from './components/Stone'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <div>
      <Navbar />

      {/* <a href='#discover'>Discover</a>
      <a href='#map'>Map</a>
      <a href='#stone'>Stone</a> */}

      <h1 id = "home">Browse everything.</h1>
      <img src={heroimage} alt="Hero_img" />
      <div>
        <Carousel/>
      </div>

      <div>
        <p>Trusted by</p>

        <div>
          <p>Benefits</p>
          <p>We've cracked the code.</p>
          <p>Area provides real insight without the data overload</p>

          <div>
            <p>Amplify Insights</p>
            <p>
              Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth
            </p>

            <p>Control Your Global Presence</p>
            <p>
              Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere
            </p>

            <p>Remove Language Barriers</p>
            <p>
              Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience
            </p>

            <p>Visualize Growth</p>
            <p>
              Generate precise, visually compelling reports that illustrate
              your growth trajectories across all regions
            </p>

            <img src={mount} alt="Mountain" />

            <div id='discover'>

            <Discover />
            </div>

            <div id='map'>

            <Mapp/>
            </div>

            <div id='stone'>
            <Stone/>
            </div>


            <div id='contact'>
            <Connectus/>
            </div>
            
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
