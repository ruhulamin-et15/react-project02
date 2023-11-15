import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blog = () => {
  
    const {title} = useParams();
    const location = useLocation();

  return (
    <div>
        <Helmet>
          <title>Blog Page</title>
        </Helmet>
        <h1>{title.toUpperCase()} Page</h1>
        <p>{location.state.body.slice(0, 200)}</p>
        <p>{location.state.body.slice(201, 400)}</p>
    </div>
  )
}

export default Blog;