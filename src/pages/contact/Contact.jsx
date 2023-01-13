import React from 'react'
import { AbtSection, Register } from '../../components'
import './contact.css'
import Img_01 from "../../assets/Img_01.jpg"
import { Person2Outlined } from '@mui/icons-material'

const Contact = () => {
  return (
    <div className='blog__contact'>
      <div className="blog__contact-left">
        <div className="blog__contact-left_titleInfo">
          <p className='blog__contact-left_titleInfo-title'>Update your account</p>
          <p className='blog__contact-left_titleInfo-del'>delete account</p>
        </div>
        <div className="blog__contact-left_profile">
          <p className='blog__contact-left_profile-imageTitle'>profile picture</p>
          <div className="blog__contact-left_profile-imageIconWrap">
            <div className="blog__contact-left_profile-imageIconWrap_image">
              <img src={Img_01} alt="dp" />
            </div>
            <div className="blog__contact-left_profile-imageIconWrap_icon">
              <Person2Outlined />
            </div>
          </div>
        </div>
        <div className="blog__contact-left_register">
          <Register />
        </div>
      </div>
      <div className="blog__contact-right">
        <AbtSection />
      </div>
    </div>
  )
}

export default Contact