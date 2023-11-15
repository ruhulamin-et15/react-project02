import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDashboard } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { FaFirstOrder } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import {Link} from 'react-router-dom';

function Sidebar2() {
  return (
    
    <div className="container-fluid fixed-top">
        <div className="row flex-nowrap">
            <div className="bg-light border col-auto col-md-2 min-vh-100">
                <div className="bg-light p-2">
                    <Link to="/" className="d-flex text-decoration-none mt-1 align-item-center text-dark">
                        <span className="fs-2 d-none d-sm-inline">Logo</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mt-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark" aria-current="page">
                                <span className="fs-5 d-none d-sm-inline"><AiOutlineHome/> Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-dark">                              
                                <span className="fs-5 d-none d-sm-inline"><AiOutlineDashboard/> DashBoard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/order" className="nav-link text-dark">                            
                                <span className="fs-5 d-none d-sm-inline"><FaFirstOrder/> Order</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-dark">                             
                                <span className="fs-5 d-none d-sm-inline"><MdProductionQuantityLimits/> Products</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/support" className="nav-link text-dark">            
                                <span className="fs-5 d-none d-sm-inline"><RiCustomerService2Line/> Support</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Sidebar2
