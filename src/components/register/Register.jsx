import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className="blog__register">
        <div className="blog__register-inputInfo_container">
            <label htmlFor="" className='blog__register-inputInfo_container-label'>Username</label>
            <input type="text" placeholder='Delviz' className="blog__register-inputInfo_container-input" />
        </div>
        <div className="blog__register-inputInfo_container">
            <label htmlFor="" className='blog__register-inputInfo_container-label'>E-Mail</label>
            <input type="email" placeholder='delviz_A@gmail.com' className="blog__register-inputInfo_container-input" />
        </div>
        <div className="blog__register-inputInfo_container">
            <label htmlFor="" className='blog__register-inputInfo_container-label'>Password</label>
            <input type="password" placeholder='password' className="blog__register-inputInfo_container-input" />
        </div>
        <div className="blog__regiter_inputInfo-inputInfo-btn">
            <button>Update</button>
        </div>
    </div>
  )
}

export default Register