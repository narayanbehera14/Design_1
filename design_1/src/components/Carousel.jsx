import React, { useState } from 'react'

const Carousel = () => {
  const images = [
    './',
    './',
    './'
  ]

 const [index,setindex]= useState(0)



  return (
    <div>

        <img src={images[index]} width='300' />
        <div>
            <button onClick={() => setindex((index-1 + images.length) % images.length)}>
                prev
            </button>
            <button onClick={() => setindex((index+1) % images.length)}>
                Next
            </button>
        </div>
      
    </div>
  )
}

export default Carousel
