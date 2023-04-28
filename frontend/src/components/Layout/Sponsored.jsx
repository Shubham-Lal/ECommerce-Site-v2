import React from 'react';
import styles from '../../styles/styles';

const Sponsored = () => {
    return (
        <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
            <div className="flex justify-between w-full">
                <div className="flex items-start">
                    <img
                        src="/sponsored/sony.png"
                        alt="sony"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/sponsored/dell.png"
                        alt="dell"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/sponsored/lg.png"
                        alt="lg"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/sponsored/apple.png"
                        alt="apple"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
                <div className="flex items-start">
                    <img
                        src="/sponsored/microsoft.png"
                        alt="microsoft"
                        style={{ width: "150px", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div >
    )
}

export default Sponsored