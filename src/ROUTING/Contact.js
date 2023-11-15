import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Helmet>
          <title>Contact Page</title>
        </Helmet>
        <h2>Contact Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sint reprehenderit laudantium veniam facilis hic impedit error autem voluptas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus sint reprehenderit laudantium veniam facilis hic impedit error autem voluptas.</p>
        <button onClick={() => {
          navigate("/")
        }}>Go to home</button>
    </div>
  )
}

export default Contact;