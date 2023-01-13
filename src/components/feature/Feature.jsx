import React from 'react'
import "./feature.css"

const Feature = ({Image}) => {
  return (
    <div className='blog__feature'>
      <div className="blog__feature-image">
        <img src={Image} alt="Img" />
      </div>
      <div className="feature-content">
        <div className="blog__feature-content_link">
          <p>music</p>
          <p>Link</p>
        </div>
        <p className="blog__feature-content_title">Lorem, ipsum dolor sit amet  consectetur adipisicing elit.</p>
        <p className="blog__feature-content_time">1 hour ago</p>
        <p className="blog__feature-content_desc">Lorem ipsum dolor sit, amet   consectetur adipisicing elit. Dolore molestias ut eaque harum eligendi sed facilis  rerum. Pariatur vitae amet distinctio, perspiciatis officia nostrum facilis sed,   qui ab excepturi possimus reprehenderit, illum similique quas mollitia voluptates   dignissimos blanditiis delectus quasi recusandae. Dolorem animi neque nemo?</p>
      </div>
    </div>
  )
}

export default Feature