import React from "react";
import "../assets/css/MainComponent.css";
import icon_links from "../assets/data/icon-links.js";
import badge_links from "../assets/data/badge-links.js";

const MainComponent = () => {
  return (
    <>
      <div className="container">
        <div className="secondary-container">
          <div className="image-container">
            <img src={process.env.PUBLIC_URL + "/images/display.jpg"} alt="Display" />
          </div>
          <h4 className="name-heading">PRANAV TRIPATHI</h4>
          <div className="icon-container">
            {icon_links.map((element) => {
              const { id, name, link, icon } = element;
              return (
                <span className="icon-inner-container" key={id}>
                  <a href={link} className="icon-link">
                    {icon}
                  </a>
                </span>
              );
            })}
          </div>
          <div className="badges-container">
            {badge_links.map((element) => {
              const { id, name, link, image } = element;
              return (
                <div className="badge-inner-container" key={id}>
                  <div className="badges">
                    <a href={link} className="badge-link">
                      <img src={process.env.PUBLIC_URL + image} alt={name} className="badge-image" />
                      <h3 className="badge-heading">{name}</h3>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
