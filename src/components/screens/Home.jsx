import React from 'react'
import Hero from './homeComponents/Hero'
import Offers from './homeComponents/Offers'
import Bestseller from './homeComponents/Bestseller'

function Home() {
  return (
    <div>
      <Hero/>
      {/* <Offers></Offers> */}
      <Bestseller></Bestseller>
    </div>
  )
}

export default Home
