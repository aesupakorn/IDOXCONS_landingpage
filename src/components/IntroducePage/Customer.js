import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logoName } from "../../utils/LogoInfo";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ display: "none" }} />;
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ display: "none" }} />;
}

class Customer extends Component {
  render() {
    const setting = {
      infinite: true,
      slidesToShow: 4,
      // slidesToScroll:2,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 0,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <Stack direction="column" gap={4}>
        <Typography variant="h5" color="#404041">
          ลูกค้าของเรา
        </Typography>
        <Slider {...setting}>
          {logoName.map((element, index) => {
            return (
              <Stack key={index}>
                <img height={140} src={"img/logoslider/" + element} />
              </Stack>
            );
          })}
        </Slider>
      </Stack>
    );
  }
}

export default Customer;
