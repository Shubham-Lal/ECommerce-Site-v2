import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { serverAPI } from '../server';

const UserActivationPage = () => {
    const { activationToken } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activationToken) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${serverAPI}/user/activation`, {
                        activationToken,
                    });
                    console.log(res.data.message);
                }
                catch (error) {
                    console.log(error);
                    setError(true);
                }
            };
            activationEmail();
        }
    }, [activationToken]);

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {error ? (
                <p>Something went wrong! Try again...</p>
            ) : (
                <p>Your Account has been created successfully</p>
            )
            }
        </div>
    )
}

export default UserActivationPage