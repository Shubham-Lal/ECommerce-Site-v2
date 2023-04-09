import React from 'react'
import styles from '../../../styles/styles'
import { brandingData, categoriesData } from '../../../static/data'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* BRANDING INFO */}
      <div className={`${styles.section} hidden sm:block select-none`}>
        <div className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}>
          {brandingData && brandingData.map((item, index) => (
            <div className="flex items-center" key={index}>
              {item.icon}
              <div className="px-3">
                <h3 className="font-bold text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id="categories">
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData && categoriesData.map((category, index) => {
            const handleClick = (item) => {
              navigate(`/products?category=${item.title}`);
            };
            return (
              <div
                className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden group border-2 border-gray-100 rounded-md p-2"
                onClick={() => handleClick(category)}
                key={index}
              >
                <h5 className={`text-[18px] leading-[1.3] capitalize font-Poppins`}>
                  {category.title}
                </h5>
                <img
                  src={category.image_Url}
                  className="w-[110px] rounded-md object-cover transition-all group-hover:scale-75"
                  alt={category.title}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories