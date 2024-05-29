import React from 'react'
import logo from "../../assets/greenlogo.png";
import './nav.css'
function Nav() {
  return (
    <div>
       <section>
        <nav
          className="navbar bgNav navbar-expand-lg fixed-top"
          tabIndex="3"
        >
          <div className="container-fluid container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={logo} alt="" />
            <div className="d-block d-lg-none">
                  <i className="fa-solid fa-indian-rupee-sign px-2 py-1 ms-4 border border-success rounded-circle text-success"></i>
                  <i className="fa-regular fa-user p-3 text-success"></i>
                  <i className="fa-solid fa-cart-shopping p-3 text-success"></i>
                </div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 text-uppercase point12px fwbold mt-2">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      plants
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      seeds
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      pots & planters
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Plant care
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gifting
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Offers
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form
                  className="  w-25"
                  role="search"
                >
                  <div className="search-box w-100 mt-2  d-flex flex-nowrap border border-dark rounded-5">
                    <input
                      className="form-control  border-0  p-2 px-3 rounded-5 input-text  "
                      type="search"
                      placeholder="Search for plants, seeds and planters..."
                      aria-label="Search"
                    />
                    <i className="fa-solid fa-magnifying-glass text-success"></i>
                  </div>
                </form>
                <div className="flex-nowrap">
                  <i className="fa-solid fa-indian-rupee-sign px-2 py-1 ms-4 border border-success rounded-circle text-success"></i>
                  <i className="fa-regular fa-user p-3 text-success"></i>
                  <i className="fa-solid fa-cart-shopping p-3 text-success"></i>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="d-block d-lg-none w-100 mx-4">
          <div className="search-box w-100 mt-2  d-flex flex-nowrap border border-dark rounded-5">
                    <input
                      className="form-control  border-0  p-2 px-3 rounded-5 input-text  "
                      type="search"
                      placeholder="Search for plants, seeds and planters..."
                      aria-label="Search"
                    />
                    <i className="fa-solid fa-magnifying-glass text-success"></i>
                  </div>
          </form>
        </nav>
      </section>
    </div>
  )
}

export default Nav
