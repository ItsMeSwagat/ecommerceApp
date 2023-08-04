import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
            </div>
            <div className='blog-content'>
              <p className='date'>31 Aug, 2023</p>
              <h5 className='title'>A beautiful sunday morning renaissance</h5>
              <p className='desc'>
                Ullamco adipisicing veniam pariatur elit ut laborum pariatur nisi voluptate irure commodo. 
                Ullamco esse adipisicing occaecat voluptate eu Lorem sint ea.
              </p>
              <Link to="/" className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard