import React from 'react'
import "./logout.css"

const Logout = () => {
  return (
    <div className="blog__logout">
      <div className="blog__logout-content">
        <p className="blog__logout-content_title">Register</p>
        <form action="" className="blog__logout-content_inputWrap">
          <div className="blog__logout-content_inputWrap-inputDesc">
            <label htmlFor="">username</label>
            <input type="text" placeholder='Enter your username...' />
          </div>
          <div className="blog__logout-content_inputWrap-inputDesc">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter your Email...' />
          </div>
          <div className="blog__logout-content_inputWrap-inputDesc">
            <label htmlFor="">password</label>
            <input type="text" placeholder='Enter your password...' />
          </div>
          <button className="blog__logout-content_inputWrap-btn btnReg">Register</button>
          <button className="blog__logout-content_inputWrap-btn btnLogin">login</button>
        </form>
      </div>
    </div>
  )
}

export default Logout