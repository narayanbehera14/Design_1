import React from 'react'
import discover from '../images/discover.png'

const Discover = () => {
  return (
    <div>
      <p>See the Big Picture</p>
      <div>
        Area turns your data into clear, vibrant that show you exactly
        what's happening in each region.
        <div>
            <p>
                01 Spot Trends in Seconds: No more digging through numbers.
            </p>
            <p>
                02 Get Everyone on the same page : share easy-to-understand report with your team.
            </p>
            <p>
                03 Make Presentation Pop: Interactive maps and dashboards keep your audience engaged.
            </p>
            <p>
                04 Your Global Snapshot: Get a quick clear overview of your entire operation.
            </p>

            <h1>Discover More</h1>

            <div>
                <img src={discover} alt="discover"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
