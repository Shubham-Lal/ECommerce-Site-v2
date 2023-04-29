import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setToken, remember, setRemember }) => {
    const { isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <Login setToken={setToken} remember={remember} setRemember={setRemember} />
        </div>
    )
}

export default LoginPage