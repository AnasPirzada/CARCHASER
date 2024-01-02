import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFromData] = useState({
    phone: "",

  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFromData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(`Value of ${name}: ${value}`);
  };
  return (
    <>
      <div
        className="loginbackground vh-100"
        style={{
          // backgroundImage: `url(/public/Rectangle%8.svg)`,
          height: "100vh", // Make sure the container takes the full height of the viewport
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container className=" ">
          <Row className=" rounded-5 ">
            <Col
              md={6}
              className="  d-flex align-item-center justify-content-center loginbackground rounded-start-5  shadow"
              style={{height:'75vh'}}
            >
              <img
                className="login-img"
                src="/loop-cars-concept-collage 1.svg"
                alt="My Image"
                style={{ objectFit: "" , height:'500px'}}

              />
            </Col>
            <Col
              md={6}
              className=" d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow "
              style={{height:'75vh'}}
            >
              {/* logo */}
              <img src="/ion_car-sport-outline.svg" alt="" />
              {/* heading */}
              <h1 className="  text-center fw-bold " width="80%">
                <span className="">Car</span> <span>Cherse</span>
              </h1>
              <h3
                className=" mt-2 mb-4 text-center "
                style={{ color: "var(--primary-color)" }}
              >
                Sign In
              </h3>
              <div className="input-container rounded-5  shadow bg-light ">
                {/* <FaUser className='icon' /> */}
                <img src="/Group 17234.svg" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInput}
                  placeholder="Phone Number"
                  className="bg-light"
                />
              </div>

              <div className="text-end mt-2" style={{ width: "80%" }}>
                {/* <p className="text-secondary me-4">Forget Password</p> */}
              </div>
              <Link to="/Dashboard" onClick={handleInput}>
                <button className="Signin-btn mt-3 "> Sign In </button>
              </Link>

              <p className=" mt-3">
                I don't have an account?{" "}
                <Link to="/SignUp" className=" text-decoration-none ">
                  {" "}
                  <span className="pgreen">
                    {" "}
                    <b> Sign up</b>
                  </span>{" "}
                </Link>{" "}
              </p>
              <p className="porange mb-0">
                <b> Contact us</b>
              </p>
              <p className=" mb-0">Example@gmail.com</p>
              <p className=" mb-0">+92 0900 786 01</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
