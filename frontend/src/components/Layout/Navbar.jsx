import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'

const Navbar = ({ activeHeading, navItems }) => {
  return (
    <div className={`${styles.normalFlex}`}>
        {navItems && navItems.map((item, index) => (
            <div className="flex" key={index}>
                <Link 
                    to={item.url}
                    className={`${activeHeading === index+1 ? "text-[#17DD1F]" : "text-[#fff]"} font-[500] px-6 cursor-pointer`}
                >
                    {item.title}
                </Link>
            </div>  
        ))}
    </div>
  )
}

export default Navbar