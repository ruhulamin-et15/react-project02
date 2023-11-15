import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {FcSearch} from 'react-icons/fc';
import {MdNotificationsActive} from 'react-icons/md';
import {Link} from 'react-router-dom';


function DashBoard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar/>
        </div>
        <div className="col-md-10">
           <div className="container">
           <div className='fixed-top'>
                <Navbar/>
                
                <div className="container">
                <div className="row mt-2">
                <div className="col-md-10"><h2 className='ms-2'>Insight Dashboard</h2></div>
                <div className="col-md-2 fs-2">
                  <Link className='ms-5 bg-info rounded-pill px-1' to="/search"><FcSearch/></Link> 
                  <Link className='ms-4 bg-info rounded-pill px-1' to="/notifications"><MdNotificationsActive/></Link>
                </div>
                </div>
                </div>
                <hr />

                <div className="container">
                <h3 className='text-success'>Good Morning, Ruhul Amin</h3>
                <div className="row mt-5">
                  <div className="col-md-4"><h4>Latest Release</h4></div>
                  <div className="col-md-4"><h4>See All Articles</h4></div>
                  <div className="col-md-4"><h4>Article Statistics </h4></div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="bg-success"><h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cum expedita, sit quasi veniam voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloribus. Voluptatem cumque quisquam asperiores omnis.</h3></div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-info"><h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus totam expedita quis etlorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, alias! excepturi quos, possimus laboriosam atque aliqu</h3></div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-primary"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci suscipit distinctio dolorum totam itaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quisquam magni aperiam alias sit repellat velit amet magnam voluptate ad! Itaque deleniti ut quasi incidunt quia!</h3></div>
                  </div>
                </div>
                </div>
           </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard