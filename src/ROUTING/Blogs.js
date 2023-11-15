import React, { useState } from 'react';
import { blogsData } from './data';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blogs = () => {

  const [blogs] = useState(blogsData);
  const truncateString = (str, num) => {
    if(str.length > num) {
      return str.slice(0, num) + "..."
    }else{
      return str;
    }
  };

  return (
    <div>
        <Helmet>
          <title>Blogs Page</title>
        </Helmet>
        <h2>Blogs Page</h2>
        <section>
          {blogs.map((blog) => {
            const {id, title, body} = blog;
            return <article key={id}>
              <h3>{title.toUpperCase()}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} state={{body}} >Learn More</Link>
            </article>
          })}
        </section>
        
    </div>
  )
}

export default Blogs;