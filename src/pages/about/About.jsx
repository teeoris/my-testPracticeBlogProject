import React from 'react'
import "./about.css"
import { AbtSection } from '../../components'
import { Delete, Edit } from '@mui/icons-material'
import Img_05 from "../../assets/Img_05.jpg"

const About = () => {
  return (
    <div className='blog__about'>
        <div className="blog__about-left">
            <div className="blog__about-left_image">
                <img src={Img_05} alt="Img" />
            </div>
            <div className="blog__about-left_titleInfo">
                <p className='blog__about-left_titleInfo-title'>Lorem ipsum dolor sit amet.</p>
                <span className='blog__about-titleInfo-icons'><Delete /></span>
                <span className='blog__about-titleInfo-icons'><Edit /></span>
            </div>
            <div className="blog__about-left_authorDate">
                <p className="blog__about-left_authorDate-author">Author: <b>Delviz</b> </p>
                <p className="blog__about-left_authorDate-date">5 hour ago</p>
            </div>
            <div className="blog__about-left_desc">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa id maiores illum iste praesentium quas. Vero eveniet eum consequuntur illum maxime neque, fuga adipisci quasi repudiandae eaque quos autem, exercitationem necessitatibus doloremque consectetur, ratione corrupti qui cum incidunt suscipit et. Quae nesciunt placeat omnis suscipit neque sint illum voluptas, exercitationem laboriosam esse porro id ipsam accusantium labore inventore quos dolor molestiae vitae, nostrum perspiciatis ad similique eos? Dolores eaque, hic quis eius deleniti, expedita nemo dolorem quaerat enim, esse illum! Architecto consequatur debitis vero dicta cupiditate sequi, ullam libero doloremque minus et? Harum similique, saepe laborum natus vel est quos aperiam, id omnis autem odit alias animi dolorem numquam iusto quo? Iste suscipit inventore, quaerat officiis corporis voluptatem at! Voluptatem sit, repellendus aliquam impedit fuga sed earum placeat cupiditate, in possimus ad dignissimos expedita voluptates consectetur non. Quas, quod aliquam quaerat quia fugit dolorem quam? Dignissimos incidunt omnis necessitatibus natus impedit corporis, libero beatae inventore minus voluptatem eaque nobis odit architecto dolorum ut suscipit hic, vero facilis. Itaque aut, rerum vero hic deleniti sunt maiores reiciendis? Magnam dolorem molestias consequatur ad, temporibus amet. Deleniti officia quis amet, blanditiis repellat voluptatum repellendus ut cum sequi non molestiae. Iste, repellendus corporis?</p>
            </div>
        </div>
        <div className="about__about-right">
            <AbtSection />
        </div>
    </div>
  )
}

export default About