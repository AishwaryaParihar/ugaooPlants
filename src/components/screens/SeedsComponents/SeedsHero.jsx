import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import seedsHero from '../../../assets/summersaleSeeds.webp'
import { Link } from 'react-router-dom';
function SeedsHero() {
  return (
    <>
    <div className="container mt-5">
        
       <Breadcrumb className='pt-5'>
      <Breadcrumb.Item><Link to="/" className="text-dark ">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active className='text-success'>Seeds</Breadcrumb.Item>
    </Breadcrumb>
      
    </div>
    <img src={seedsHero} alt="" className='img-fluid w-100'/>
    <div className="container my-3">
        <h2>Seeds</h2>
        <p className="text-secondary fs-5">With high-yielding varieties of vegetable and <span className="seed-text">fruit seeds</span>, <span className="seed-text">flower seeds</span> with high germination rates, and exotic <span className="seed-text">flower bulbs</span>, Ugaoo guarantees only the best organic seeds for you and your garden! Elevate your home garden with our carefully crafted selection of seeds.</p>
    </div>
    </>
  )
}

export default SeedsHero
