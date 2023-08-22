import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <h6>Loading...</h6>
    }
    if (user) {
        return children;
    } else {
        return (
            <div>
                <Navigate to="/login" state={{ from: location }} replace></Navigate>
            </div>
        );
    }

};

export default PrivateRoute;