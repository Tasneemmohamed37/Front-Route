import React from 'react'
import { Navigate } from 'react-router-dom';

export default function AuthGard({ children }) {
    let user = true;
        if (user){
            return children 
        }
        else{
            return <Navigate to='auth/login' />
        }
}
