import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleBackwardClick = () => {
    if (this.state.count == 0) {
      this.setState({
        count: 2,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  handleForwardClick = () => {
    if (this.state.count == 2) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  render() {
    const data = images[this.state.count];

    return (
      <div className="container">
        <ArrowBackIosIcon
          className="arrows"
          onClick={this.handleBackwardClick}
        />
        <div className="imageDetails">
          <div>
            <h1>{data.title}</h1>
          </div>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
        </div>
        <img src={data.img} alt="" />
        <ArrowForwardIosIcon
          className="arrows"
          onClick={this.handleForwardClick}
        />
      </div>
    );
  }
}

export default Carousel;
