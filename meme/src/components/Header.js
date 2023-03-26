import React from 'react'
import trollImg from '../images/TrollFace.gif';
export default function Header(){
    return (
      <div className="header">
        <div className="header-container">
          <div className="left-head">
            <img src={trollImg} className="trollLogo" alt="trollImg" />
            <h2>Meme Generator</h2>{" "}
          </div>

          <div className="heading">React Course - Project 3</div>
        </div>
      </div>
    );
}
