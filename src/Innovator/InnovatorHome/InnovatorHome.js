import React from "react";
import "./InnovatorHome.css";
import Aside from "../../CommonComponents/Aside/Aside";
import LineCart from "./LineCart";
import { Col, Row } from "react-bootstrap";

function InnovatorHome() {
  const fetchAsideItems = () => {
    const asideObj = [
      { text: "Dashboard", link: "/", icon:"th-large" },
      { text: "Projects", link: "/innovator/projects", icon: "sticky-note" },
    ];

    return <Aside asideObj={asideObj} />;
  };

  const fetchLineChart = () => {
    return <LineCart />;
  };
  return (
    <div className="main-grid">
      <div> {fetchAsideItems()}</div>

      <Row>
        <Col>{fetchLineChart()}</Col>

        <Col>
          <>
            <Col className="home-card">
              <div className="text-center p-3">
                {" "}
                <h3>Investors</h3>
                <h5>20</h5>
              </div>
            </Col>
            <Col className="home-card">
              <div className="text-center p-3">
                {" "}
                <h3>Projects</h3>
                <h5>12</h5>
              </div>
            </Col>
          </>
        </Col>
      </Row>
    </div>
  );
}

export default InnovatorHome;
