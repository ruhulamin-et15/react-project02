import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Blog() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
           <div className="container">
              <div className="fixed-top">
                <Navbar/>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Blog