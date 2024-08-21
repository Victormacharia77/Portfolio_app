import "./WorkCardStyles.css";

// eslint-disable-next-line no-unused-vars
import React from 'react'
import WorkCard from "./workCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
           {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                desc={val.desc}
                view={val.view}
                />
            )
           }
        )}
        
      </div>
    </div>
  )
}

export default Work;


