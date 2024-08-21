import "./footerStyles.css"

// eslint-disable-next-line no-unused-vars
import React from 'react'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <a>
  <i
    className="fa-solid fa-house"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>
        <div>
           <p>Tom Mboya Street</p>
           <p>Nairobi</p>
        </div>
            </div>
        
        <div className="phone">
            <h4> <a>
            
  <i
    className="fa-solid fa-phone-flip"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>
           +254 745 398 967</h4>
       
           </div>

           <div className="email">
            <h4> <a>
  <i
    className="fa-solid fa-envelope"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>
           victormacharia.kinyanjui@gmail.com</h4>
       
           </div>
        </div>

        <div className="right">
           <h4>About the creator</h4>
           <p>This is Victor Kinyanjui Macharia.Diploma student
            in Information Technology.I love creating new 
            projects and generating new solutions.
            
           </p>
           <div className="social">

           <a href=''>
           
  <i
    className="fa-brands fa-github"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>

<a>

  <i
    className="fa-brands fa-facebook"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>

<a>

  <i
    className="fa-brands fa-instagram"
    style={{ fontSize: 20, color: "#fff", marginRight: "2rem" }}
  ></i>
</a>
           </div>

        </div>

      </div>
    </div>
  )
}

export default footer

