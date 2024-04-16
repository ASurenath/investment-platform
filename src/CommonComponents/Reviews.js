import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Reviews() {
  const marqueeRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      if (isHovered) {
        marqueeRef.current.stop();
      } else {
        marqueeRef.current.start();
      }
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Container  className="mt-5 mb-5">
        <h5 className="">. reviews</h5>
        <marquee
          ref={marqueeRef}
          direction="left"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <div className="review shadow">
              <div className="review-text">
                <p>
                  {" "}
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam totam enim in ab impedit debitis earum, provident vel
                  iste officia expedita explicabo beatae veniam dolores quia
                  hic nihil natus. Porro."
                </p>
              </div>
              <div className="review-details text-center">
                <img
                  src="https://i.postimg.cc/RCKMTpB7/download.jpg"
                  className="review-profile"
                  alt=""
                />
                <h4>Mery</h4>
              </div>
            </div>
            <div className="review shadow">
              <div className="review-text">
                <p>
                  {" "}
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam totam enim in ab impedit debitis earum, provident vel
                  iste officia expedita explicabo beatae veniam dolores quia
                  hic nihil natus. Porro."
                </p>
              </div>
              <div className="review-details text-center">
                <img
                  src="https://i.postimg.cc/RCKMTpB7/download.jpg"
                  className="review-profile"
                  alt=""
                />
                <h4>Mery</h4>
              </div>
            </div>
          </div>
        </marquee>
      </Container>
    </div>
  );
}

export default Reviews;
