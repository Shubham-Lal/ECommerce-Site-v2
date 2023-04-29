import React from 'react'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div
            className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat select-none ${styles.normalFlex}`}
            style={{ backgroundImage: "url(/banner.jpg)" }}
        >
            <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
                <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3D3A3A] font-[600] capitalize`}>
                    Best Collection for <br />
                    Home Decoration
                </h1>
                <p className="pt-5 text-[16px] font-Poppins font-[400] text-[#000000BA]">
                    Looking to spruce up your living space? Check out our collection of the
                    best home decoration ideas! Our collection includes a variety of items
                    that can help you add personality and character to your home, such as
                    decorative pillows, wall art, indoor plants, area rugs, curtains and
                    drapes, mirrors, and decorative objects. Shop now and transform your
                    living space into the home of your dreams!
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5 group`}>
                        <span className="text-[#fff] font-Poppins text-[18px] transition-all group-hover:scale-125">
                            Shop Now
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero