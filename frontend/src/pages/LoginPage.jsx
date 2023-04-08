import React from 'react';
import Login from '../components/Login/Login';

const LoginPage = ({ setToken }) => {
    return (
        <div className="">
            <Login setToken={setToken} />
        </div>
    )
}

export default LoginPage