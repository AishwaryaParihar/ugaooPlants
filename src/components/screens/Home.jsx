import React from 'react'
import Hero from './homeComponents/Hero'
import Offers from './homeComponents/Offers'
import Bestseller from './homeComponents/Bestseller'
import Shopthelook from './homeComponents/Shopthelook.jsx'
import WhyUgao from './homeComponents/WhyUgao.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      {/* <Offers></Offers> */}
      <Bestseller></Bestseller>
      <Shopthelook></Shopthelook>
      <WhyUgao></WhyUgao>

    </div>
  )
}

export default Home
