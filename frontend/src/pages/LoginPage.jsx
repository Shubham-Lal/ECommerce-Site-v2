import React from 'react';
import Login from '../components/Login/Login';

const LoginPage = ({ setToken, remember, setRemember }) => {
    return (
        <div>
            <Login setToken={setToken} remember={remember} setRemember={setRemember} />
        </div>
    )
}

export default LoginPage