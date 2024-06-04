import React from 'react'
import subscribe from '../../../assets/Subscription_Stop_Motion.webp';
function PlantSubscription() {
  return (
    <div>
      <div className="container-fluid">
      <div className="row ">
      <div className="col-md-6">
             <div className="text-end py-4">
             <img src={subscribe} alt="" className="img-club" />
             </div>
            </div>
            <div className="col-md-6  d-flex align-items-center px-5">
                <div className="join">
                    <h2>Plant Subscriptions</h2>
                    <p className='text-secondary fs-5'>Receive a curated box of handpicked plants, packaged with care, every month.</p>
                    <div className="gap-4">
                    <button className="btn btn-success border-success border-2 text-uppercase px-5 me-4">Explore Boxes</button>
                    
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default PlantSubscription
