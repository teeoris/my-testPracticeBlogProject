import React from 'react';
import "./home.css";
import Feature from '../../components/feature/Feature';
import AbtSection from '../../components/abtSection/AbtSection';
import Img_05 from "../../assets/Img_05.jpg"
import Img_04 from "../../assets/Img_04.jpeg"
import Img_03 from "../../assets/Img_03.jpeg"
import Img_02 from "../../assets/Img_02.jpeg"


const Home = () => {
  return (
    <div className='blog__home'>
      <div className="blog__home-header">
        
      </div>
      <div className="blog__home-feature">
        <div className="blog__home-feature_left">
          <Feature Image= {Img_05}/>
          <Feature Image= {Img_04}/>
        </div>
        <div className="blog__home-feature_right">
          <Feature Image= {Img_03}/>
          <Feature Image= {Img_02}/>
        </div>
      </div>
      <div className="blog__home-abtSection">
        <AbtSection />
      </div>
    </div>
  )
}

export default Home