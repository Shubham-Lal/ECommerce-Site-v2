import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import styles from '../styles/styles'
import ProfileSidebar from '../components/Profile/ProfileSidebar'
import ProfileContent from '../components/Profile/ProfileContent'

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <Header />
            <div className={`${styles.section} flex bg-[#F5F5F5] py-10 min-h-screen 800px:min-h-fit`}>
                <div className="w-[50px] 800px:w-[335px] sticky my-auto 800px:my-0">
                    <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                <ProfileContent activeTab={activeTab} />
            </div>
        </div>
    )
}

export default ProfilePage