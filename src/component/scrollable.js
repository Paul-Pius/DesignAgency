import React from 'react';
import google from '../images/google.png';
import trello from '../images/trello.png';
import notion from '../images/notion.png';
import slack from '../images/slack.png';

const ScrollableLogos = () => {

    const imageStyle = {
        height: '30px',
      };

  return (
    <div className="h-16 flex space-x-10 overflow-x-auto">
      <img src={google} alt="google_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={trello} alt="trello_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={notion} alt="notion_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={google} alt="google_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={slack} alt="slack_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={notion} alt="notion_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={google} alt="google_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={trello} alt="trello_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={notion} alt="notion_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
      <img src={slack} alt="slack_logo"  style={imageStyle} className="mt-4 h-12px p-0px 32px 0px 115px logo logo"/>
    </div>
  );
};

export default ScrollableLogos;