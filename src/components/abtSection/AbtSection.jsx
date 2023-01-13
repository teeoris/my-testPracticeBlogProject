import React from 'react'
import "./abtSection.css"
import Img_08 from "../../assets/Img_08.jpg";
import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'

const AbtSection = () => {
  return (
    <div className="blog__home-abtSection">
        <p className='blog__home-abtSection_title'>about me</p>
        <div className="blog__home-abtSection_image">
          <img src={Img_08} alt="Img_08" />
        </div>
        <p className='blog__home-abtSection_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, reiciendis doloribus porro dicta maxime blanditiis.</p>
        <div className="blog__home-abtSection_categories">
          <p className='blog__home-abtSection_categories-title'>categories</p>
          <div className="blog__home-abtSection_categories-subcategories">
            <p>life</p>
            <p>sport</p>
            <p>tech</p>
            <p>music</p>
            <p>fashion</p>
            <p>design</p>
          </div>
          <div className="blog__about-abtSection_categories-cta">
            <p className='blog__about-abtSection_categories-cta_title'>follow us</p>
            <div className="blog__about-abtSection_categories-cta_icons">
                <Facebook className='blog__navbar-social_icons cta'/>
                <Instagram className='blog__navbar-social_icons cta'/>
                <Twitter className='blog__navbar-social_icons cta'/>
                <Pinterest className='blog__navbar-social_icons cta'/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AbtSection