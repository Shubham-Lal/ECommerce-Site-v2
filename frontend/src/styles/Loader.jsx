import React from 'react';
import Lottie from "lottie-react";
import loaderAnimation1 from "../assets/animations/sellerLoader1.json";
import loaderAnimation2 from "../assets/animations/sellerLoader2.json";

const Loader = () => {
    const animation = [
        loaderAnimation1,
        loaderAnimation2
    ];

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[200px] h-[200px]">
                <Lottie
                    loop={true}
                    autoplay={true}
                    animationData={animation[Math.floor(Math.random() * 2)]}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                />
            </div>
        </div>
    )
}

export default Loader