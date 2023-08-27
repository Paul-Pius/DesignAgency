import React from 'react';
import './Scroll.css';
import Marquee from 'react-fast-marquee';

import google from '../images/google.png';
import trello from '../images/trello.png';
import notion from '../images/notion.png';
import slack from '../images/slack.png';


function Scroll() {
  return (
    <div className="App">
      <div>
        <Marquee direction="left" speed={100} delay={2}>
          <div className="image_wrapper">
            <img src={google} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={trello} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={notion} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={slack} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={google} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={trello} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={notion} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={slack} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Scroll;