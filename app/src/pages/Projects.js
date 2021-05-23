import React from "react";
import '../styles/Projects.css';
import shop from '../images/shop.png';
import smartTimer from '../images/smartTimer.png';
import vklass from '../images/vklass.png';
export const Projects = () => {
  return (
    <div className="project">
    <div className="flex-item-left">
      <img src={vklass} alt="" srcset="" />
      <h3>Vklass</h3>
      <p>This is a website I made in school, were I remade a already existing website</p>
    </div>
    <div className="flex-item-middle">
      <img src={smartTimer} alt="" srcset="" />
      <h3>Timer</h3>
      <p>Smart timer is an web application that is meant to help you with your rubik's cube career.</p>

    </div>
    <div className="flex-item-right">
      <img src={shop} alt="" srcset="" />
      <h3>Shop</h3>
      <p>This is an product shop made in HTML, CSS and Javascript</p>
    </div>
</div>
  );
};