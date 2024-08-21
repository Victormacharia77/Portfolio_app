import './FormStyles.css';
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Form = () => {
  return (
    <div className = "form">

      <Form>
        <label>Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="email"></input>

        <label>Subject</label>
        <input type="text"></input>

        <label>Message</label>
        <textarea rows ="6" placeholder='Type your Message here' />
        <button className="btn">Submit</button>
      </Form>

    </div>
  )
}

export default Form
