import React, { useState } from 'react'
import "./navbar.css"
import Img_01 from "../../assets/Img_01.jpg"
import { Link } from 'react-router-dom'
import { Menu, Clear, Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material'


// ----------MenuLinks------------------
const MenuLinks = () => (
  <>
    <p><Link to="/Home" className='blog__navbar-links_item'>home</Link></p>
    <p><Link to="/about" className='blog__navbar-links_item'>about</Link></p>
    <p><Link to="/contact" className='blog__navbar-links_item'>contact</Link></p>
    <p><Link to="/write" className='blog__navbar-links_item'>write</Link></p>
    <p><Link to="/logout" className='blog__navbar-links_item'>logout</Link></p>
  </>
)
// ----------MenuLinks----X-------------

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='blog__navbar wrapper'>
      <div className="blog__navbar-socials">
        <Facebook className='blog__navbar-social_icons'/>
        <Instagram className='blog__navbar-social_icons'/>
        <Twitter className='blog__navbar-social_icons'/>
        <Pinterest className='blog__navbar-social_icons'/>
      </div>
      <div className="blog__navbar-links">
        <MenuLinks />
      </div>
      <div className="blog__navbar-dp">
        <img src={Img_01} alt="Img_01" />
        <div className="blog__navbar-dp_menu">
          {toggleMenu
          ? <Clear onClick={() => (setToggleMenu(false))} />
          : <Menu onClick={() => (setToggleMenu(true))} /> 
          }
          {toggleMenu && (
            <div className="blog__navbar-dp_menu-container">
              <div className="blog__navbar-dp_menu-container_links">
                <MenuLinks />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar