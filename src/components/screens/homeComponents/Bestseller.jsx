import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./bestseller.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import bestPicks from "../../../assets/bestPic.webp";
import bestSeller from "../../../assets/Bestseller1.png";
const products = [
  {
    id: 1,
    name: "Peace Lily Plant",
    rating: 4.5,
    delprice: 399,
    price: 299,
  },
  {
    id: 2,
    name: "Snake Plant",
    rating: 4.2,
    delprice: 499,
    price: 399,
  },
  {
    id: 3,
    name: "Spider Plant",
    rating: 4.8,
    delprice: 299,
    price: 199,
  },
  {
    id: 4,
    name: "Spider Plant",
    rating: 4.8,
    delprice: 1499,
    price: 1299,
  },
];

function Bestseller() {
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="heading">
          <h2>
            <img src={bestSeller} alt="" className="seller-best " /> Bestsellers
          </h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-6 col-md-3">
              <Card className=" border-0">
                <a href="" className="nolink">
                  <div className="textdecor position-relative">
                    <img src={bestPicks} alt="" className="bextpick" />
                    <Badge
                      bg="warning"
                      text="dark"
                      className="position-absolute  rounded-0 text-uppercase p-2 sale-badge"
                    >
                      {" "}
                      sale{" "}
                    </Badge>
                  </div>
                  <Card.Body className="p-0 m-0">
                    <Card.Title>{product.name}</Card.Title>
                    <div className="bestProductName pt-2 pb-3"></div>
                    <div className="star-rating">
                      {Array.from({ length: 5 }, (v, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-warning ${
                            product.rating > i ? "checked" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-success h6">
                      {" "}
                      <del className="text-secondary">
                        <i class="fa-solid fa-indian-rupee-sign point12px"> </i>{" "}
                        {product.delprice}
                      </del>{" "}
                      From{" "}
                      <i class="fa-solid fa-indian-rupee-sign point12px"> </i>{" "}
                      {product.price}
                    </p>
                    <Button className="w-100 btn btn-success rounded-0 text-uppercase">
                      View Product
                    </Button>
                  </Card.Body>
                </a>
              </Card>
            </div>
          ))}
          <div className="viewall my-5 d-flex justify-content-center">
            <Button className="px-5 btn btn-success rounded-0 text-uppercase rounded-1">
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
