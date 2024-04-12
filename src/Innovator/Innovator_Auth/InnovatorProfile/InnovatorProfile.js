import React from "react";
import "./InnovatorProfile.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

function InnovatorProfile() {
  return (
    <div className="profile-body">
      <Row className="profile ">
       
        <Col lg={4} className=" p-5 d-flex align-item-center justify-content-center">
            
          <div>
            <img
              className="Profile-Img"
              src="https://i.postimg.cc/fb7Z35cV/professional-profile-pictures-1500-x-2100-bvjgzg0cwa8r051t.jpg"
              alt=""
            />
          </div>{" "}
        </Col>
        <Col lg={8} className="mt-5">
            
            <h2>Name</h2>
            <h5>Entrepreneur</h5>
        </Col>
      </Row>
    </div>
  );
}

export default InnovatorProfile;
