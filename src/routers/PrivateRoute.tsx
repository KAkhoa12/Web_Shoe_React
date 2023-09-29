import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'
import useAuth from '../hooks/useAuth'
const PrivateRoute = ():JSX.Element=>{
    const { profile } = useAuth()
    if (!profile) {
        return <Navigate to='/Login' />;
    }
    return <Outlet />;
}
export default PrivateRoute