import React from 'react'
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import heroimage from './images/Hero_image.png'
import mount from './images/mount.png'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar />

      <h1>Browse everything.</h1>
      <img src={heroimage} alt="Hero_img" />

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

            <Discover />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
