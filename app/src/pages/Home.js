import React from "react";
import Typical from 'react-typical'
import '../styles/Home.css'
import { Link } from "react-router-dom";



export const Home = () => {
  return (
    <div className="home">
      <h1>Hello!</h1>
        <h3>
            <Typical 
            loop={Infinity}
            wrapper="p"
            steps={[
                ' My name is Linnea🖐',
                3000,
                ' I am a web developer💻',
                3000
            ]}
            />
        </h3>
        <Link to="/about" className="read-btn">Read More</Link>
    </div>
  );
};