import React from 'react'
import "../assets/css/MainComponent.css"
import icon_links from '../assets/data/icon-links.js';

const MainComponent = () => {
  return (
    <>
      <div className="container">
        <div className="secondary-container">
            <div className="image-container">
              <img src="/images/display.jpg" alt="Display Image" />
            </div>
            <h4 className='name-heading'>PRANAV TRIPATHI</h4>
            <div className="icon-container">
              {icon_links.map((element)=>{
                  const{id,name,link,icon}=element;
                  return(
                    <span className="icon-inner-container" key={id}>
                      <a href={link} className="icon-link">{icon}</a>
                    </span>
                  )
              })}
            </div>
        </div>
      </div>
    </>
  )
}

export default MainComponent;
