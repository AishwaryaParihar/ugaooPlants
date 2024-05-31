import React from 'react'
import Hero from './homeComponents/Hero'
import Offers from './homeComponents/Offers'
import Bestseller from './homeComponents/Bestseller'
import Shopthelook from './homeComponents/Shopthelook.jsx'
import DealOfTheWee from './homeComponents/DealOfTheWee.jsx'
import WhyUgao from './homeComponents/WhyUgao.jsx'
import Youtube from './homeComponents/Youtube.jsx'
import Bestpick from './homeComponents/Bestpick.jsx'
// import DealOfTheWeek from './homeComponents/DealOfTheWee.jsx'


function Home() {
  return (
    <div>
      <Hero/>
      {/* <Offers></Offers> */}
      <Bestpick/>
      <Bestseller></Bestseller>
      <Shopthelook></Shopthelook>
      <DealOfTheWee/>
      <WhyUgao></WhyUgao>
<Youtube/>

    </div>
  );
}

export default Home;
