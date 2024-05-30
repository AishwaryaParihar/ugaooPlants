import React from 'react'
import Hero from './homeComponents/Hero'
import Offers from './homeComponents/Offers'
import Bestseller from './homeComponents/Bestseller'
import Shopthelook from './homeComponents/Shopthelook.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      {/* <Offers></Offers> */}
      <Bestseller></Bestseller>
      <Shopthelook></Shopthelook>
    </div>
  )
}

export default Home
