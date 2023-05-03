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
            <Lottie
                loop={true}
                autoplay={true}
                // animationData={[loaderAnimation1, loaderAnimation2].Math.floor(Math.random() * 2)}
                animationData={animation[Math.floor(Math.random() * 2)]}
                width={300}
                height={300}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
        </div>
    )
}

export default Loader