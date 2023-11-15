import React from 'react';
import { Navigate } from 'react-router-dom';

const Protect = ({isLoggedIn, children}) => {

    if(!isLoggedIn){
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default Protect;