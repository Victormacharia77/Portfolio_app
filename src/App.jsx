// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import "./normal.css";




function App() {

  return (
    
   <>
   <div className="App">

<aside className="sidemenu">
      <div className="side-menu-button">
        <span>+</span>
        New Chart
      </div>
</aside>

<section className="chatbox">
  <div className="chat-log">
    <div className="chat-message">
      <div className="chat-message-center">
   
       <div className="avatar">

       </div>

       <div className="message">
        Hello world
       </div>

  </div>
    </div>
        </div>

        <div className="chat-message chat-message-2">
      <div className="chat-message-center">
        <div className="avatar"></div>
        <div className="message">
          I am a replica!
        </div>
      </div>
    </div>
  
       
        
  <div className="chat-input-holder">
    <textarea 
      rows="1"
      className="chat-input-textarea">
    </textarea>
  </div>
</section>
 
   </div>

   
   
   </>
  )
}

export default App;
