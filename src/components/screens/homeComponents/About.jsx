import React from 'react'
import ppp from '../../../assets/PPC.webp'
function About() {
  return (
    <div>
      <div className="container">
        <div className="row ">
            <div className="col-md-6  d-flex align-items-center px-4">
                <div className="join">
                    <h2>Join our Plant Parent Rewards Club</h2>
                    <p>Every plant purchase is a gift that keeps on giving. Earn coins and redeem <br /> them for exclusive discounts.</p>
                    <div className="gap-4">
                    <button className="btn btn-success border border-success border-2 text-uppercase px-3 me-4">Learn more</button>
                    <button className=" btn border border-success border-2 text-uppercase btn-join px-2">refer a friend</button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
             <div className="text-end py-4">
             <img src={ppp} alt="" className="img-club" />
             </div>
            </div>
        </div>
    </div>
    {/* why ugaao */}
    <div className="container aboutugaoo py-5">
    <div className="whyugaoo">
        <h2>About Ugaoo</h2>
        <p className="whyugaoo-p">Ugaoo is India’s largest and most trusted online plant nursery that specialises in all your gardening needs. The Ugaoo online nursery not only sells premium quality exotic <a href="/">indoor plants</a>, outdoor plants, <a href="/">flowering plants</a>, and <a href="/">succulents</a> to name a few, but also specialises in organic vegetable, herb, and <a href="/">flower seeds</a>. Ugaoo provides premium, trendy planters, best in class soil and <a href="/">fertilisers</a>, and all the <a href="/">gardening tools</a> a home gardener can need.</p>
        <p className="whyugaoo-p">At Ugaoo we believe that we are more than a garden store, we help people grow along their gardening journey, Afterall plants grow people. We believe in the magic of growing things and discovering our inner self in the process while revelling in the jot of your first new leaf, your first bloom, or your first sprouted seed.</p>
        <p className="whyugaoo-p">Ugaoo prides itself in the fact that it is not just an online garden store or online plant nursery but a friend who helps both you and your garden grow. We provide a lifetime of gardening support and hand hold you through all your gardening journeys.</p>
    </div>
    </div>
    </div>
  )
}

export default About
