import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { serverAPI } from '../server';

const SellerActivationPage = () => {
    const { activationToken } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activationToken) {
            const activationEmail = async () => {
                try {
                    await axios.post(`${serverAPI}/seller/shop/activation`, {
                        activationToken,
                    });
                }
                catch (error) {
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

export default SellerActivationPage