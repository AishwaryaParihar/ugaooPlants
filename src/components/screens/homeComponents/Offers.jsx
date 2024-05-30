import React from "react";

function Offers() {
  return (
    <>
      <section className="bg-warning">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-atems-center py-3">
            <div className="row">
            <div className="col-md-6 ">
              <div className="para h3">
                <p>
                  Spend a day immersed in nature with <br /> Ugaoo Farm Tours!!!
                </p>
                <p> Registration is now open</p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <button
                type="button"
                className="btn btn-success text-uppercase px-5"
              >
                Register Now
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offers;
