import React from "react";
import bc from "../../img/shoppin.jpg";
import bc1 from "../../img/bas.jpg";
import bc2 from "../../img/6pin.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home-block">
            <img
              style={{
                width: "500px",
                borderRadius: "50px",
                margin: "40px 0",
                // border: "solid 0.2px" ,
              }}
              src={bc2}
              alt=""
            />
            <div className="h-block2">
              <img
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "50px",
                  margin: "20px 0",
                  //  border: "solid 0.2px" ,
                }}
                src={bc1}
                alt=""
              />
              <img
                style={{
                  width: "300px",
                  height: "330px",
                  borderRadius: "50px",
                  // border: "solid 0.2px" ,
                }}
                src={bc}
                alt=""
              />
            </div>
          </div>
          <div className="home-title">
            <h1>Welcome to our web site!</h1>
            <p>
              We present you an excellent online store in Kyrgyzstan. Here, each
              visitor will be able to choose the best gift for himself and his
              loved ones.
            </p>

            <div>
              <input
                className="input"
                type="text"
                placeholder="Введите название товара ..."
              />
            </div>
            <NavLink to={"/product"}>
              {" "}
              <button>Shop Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
