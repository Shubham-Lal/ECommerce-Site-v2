import { AiOutlineCreditCard, AiOutlineFolderAdd, AiOutlineGift, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { MdOutlineLocalOffer, MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { BiMessageSquareDetail } from "react-icons/bi";

// Navigation Data
export const navItems = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Best Selling",
        url: "/best-selling",
    },
    {
        title: "Products",
        url: "/products",
    },
    {
        title: "Events",
        url: "/events",
    },
    {
        title: "FAQ",
        url: "/faq",
    },
];

export const footerCompanyLinks = [
    {
        name: "About us",
        link: "/about",
    },
    {
        name: "Careers",
        link: "/careers",
    },
    // {
    //     name: "Store Locations",
    //     link: "/store",
    // },
    {
        name: "Events",
        link: "/events",
    },
    {
        name: "Our Blog",
        link: "/blog",
    },
    {
        name: "Reviews",
        link: "/reviews",
    },
];

export const footerItemLinks = [
    {
        name: "Mobile & Tablets",
        link: "/products?category=Mobile%20and%20Tablets",
    },
    {
        name: "Computers & Laptop",
        link: "/products?category=Computers%20and%20Laptops",
    },
    {
        name: "Music & Gaming",
        link: "/products?category=Music%20and%20Gaming",
    },
    {
        name: "Clothes",
        link: "/products?category=Clothes",
    },
    {
        name: "Cosmetic & Body Care",
        link: "/products?category=Cosmetics%20and%20Body%20Care",
    },
];

export const footerSupportLinks = [
    {
        name: "FAQs",
        link: "/faq",
    },
    {
        name: "Reviews",
        link: "/reviews",
    },
    {
        name: "Contact Us",
        link: "/contact",
    },
    {
        name: "Shipping",
        link: "/shipping",
    },
    {
        name: "Chat",
        link: "/chat",
    },
];

// FAQs
export const faqData = [
    {
        id: 1,
        question: "What is your return policy?",
        answer: "If you're not satisfied with your purchase, we accept returns within 30 days of delivery. To initiate a return, please email us at weknewhow@gmail.com with your order number and a brief explanation of why you're returning the item.",
    },
    {
        id: 2,
        question: "How do I track my order?",
        answer: "You can track your order by clicking the tracking link in your shipping confirmation email, or by logging into your account on our website and viewing the order details.",
    },
    {
        id: 3,
        question: "How do I contact customer support?",
        answer: "You can contact our customer support team by emailing us at weknewhow@gmail.com, or by calling us at (+91)91631-61834 between the hours of 9am and 5pm IST, Monday through Friday.",
    },
    {
        id: 4,
        question: "Can I change or cancel my order?",
        answer: "Unfortunately, once an order has been placed, we are not able to make changes or cancellations. If you no longer want the items you've ordered, you can return them for a refund within 30 days of delivery.",
    },
    {
        id: 5,
        question: "Do you offer international shipping?",
        answer: "Currently, we only offer shipping within India. But we are working on our global spread. Subscribe to our newsletter to stay updated.",
    },
    {
        id: 6,
        question: "What payment methods do you accept?",
        answer: "We accept Visa, Mastercard, Paypal payment method along with cash on delivery system.",
    },
]

// Product Detail's page data
export const productDetailsData = [
    {
        tab: "Product Details",
        info: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    },
    {
        tab: "Product Reviews",
        info: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    },
    {
        tab: "Seller Information",
        info: "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    },
]

// Profile Sidebar Data
export const profileSidebarData = [
    {
        name: "Profile",
        icon: <RxPerson />
    },
    {
        name: "Orders",
        icon: <HiOutlineShoppingBag />
    },
    {
        name: "Refunds",
        icon: <HiOutlineReceiptRefund />
    },
    {
        name: "Inbox",
        icon: <AiOutlineMessage />,
        link: "/inbox"
    },
    {
        name: "Track Order",
        icon: <MdOutlineTrackChanges />
    },
    {
        name: "Payment Methods",
        icon: <AiOutlineCreditCard />
    },
    {
        name: "Address",
        icon: <TbAddressBook />
    },
    {
        name: "Logout",
        icon: <AiOutlineLogout />
    },
]

export const sellerDasboardSidebar = [
    {
        name: "Dashboard",
        icon: <RxDashboard />,
        url: "/dashboard"
    },
    {
        name: "All Orders",
        icon: <FiShoppingBag />,
        url: "/dashboard-orders"
    },
    {
        name: "My Products",
        icon: <FiPackage />,
        url: "/dashboard-products"
    },
    {
        name: "Add Product",
        icon: <AiOutlineFolderAdd />,
        url: "/dashboard-add-product"
    },
    {
        name: "My Events",
        icon: <MdOutlineLocalOffer />,
        url: "/dashboard-events"
    },
    {
        name: "Create Event",
        icon: <VscNewFile />,
        url: "/dashboard-create-event"
    },
    {
        name: "Payout",
        icon: <CiMoneyBill />,
        url: "/dashboard-payout"
    },
    {
        name: "Inbox",
        icon: <BiMessageSquareDetail />,
        url: "/dashboard-inbox"
    },
    {
        name: "Discount Coupons",
        icon: <AiOutlineGift />,
        url: "/dashboard-coupons"
    },
    {
        name: "Refunds",
        icon: <HiOutlineReceiptRefund />,
        url: "/dashboard-refunds"
    },
    {
        name: "Settings",
        icon: <CiSettings />,
        url: "/dashboard-settings"
    },
]

// Branding Data
export const brandingData = [
    {
        id: 1,
        title: "Free Shipping",
        description: "From all orders over ₹1000",
        icon: (
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1H5.63636V24.1818H35"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M34.9982 1H11.8164V18H34.9982V1Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M11.8164 7.18164H34.9982"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
            </svg>
        ),
    },
    {
        id: 2,
        title: "Daily Surprise Offers",
        description: "Save up to 25% off",
        icon: (
            <svg
                width="32"
                height="34"
                viewBox="0 0 32 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                ></path>
                <path
                    d="M30.7 2L29.5 10.85L20.5 9.65"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
            </svg>
        ),
    },
    {
        id: 3,
        title: "Affortable Prices",
        description: "Get Factory direct price",
        icon: (
            <svg
                width="32"
                height="35"
                viewBox="0 0 32 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                ></path>
                <path
                    d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                ></path>
                <path
                    d="M16 28V22"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                ></path>
                <path
                    d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
            </svg>
        ),
    },
    {
        id: 4,
        title: "Secure Payments",
        description: "100% protected payments",
        icon: (
            <svg
                width="32"
                height="38"
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
                <path
                    d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                    stroke="#FFBB38"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="square"
                ></path>
            </svg>
        ),
    },
];

// Categories Data
export const categoriesData = [
    {
        id: 1,
        title: "Computers and Laptops",
        subTitle: "Computers Laptops",
        image_Url:
            "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
    },
    {
        id: 2,
        title: "Cosmetics and Body Care",
        subTitle: "Cosmetics Body Care",
        image_Url:
            "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
    },
    {
        id: 3,
        title: "Accessories",
        subTitle: "Accessories",
        image_Url:
            "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
    },
    {
        id: 4,
        title: "Clothes",
        subTitle: "Clothes",
        image_Url:
            "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
    },
    {
        id: 5,
        title: "Shoes",
        subTitle: "Shoes",
        image_Url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
    },
    {
        id: 6,
        title: "Gifts",
        subTitle: "Gifts",
        image_Url:
            "https://media.istockphoto.com/id/1340030448/vector/gift-boxes-isolated-on-white-3d-white-gift-boxes-with-golden-ribbon-and-bow-birthday.jpg?s=612x612&w=0&k=20&c=cQLZmpTxWQFPV66WrbmmaMkTnelhdOQVRds-5xrn3Lg=",
    },
    {
        id: 7,
        title: "Pet Care",
        subTitle: "Pet Care",
        image_Url: "https://cdn.openpr.com/T/c/Tc15444071_g.jpg",
    },
    {
        id: 8,
        title: "Mobile and Tablets",
        subTitle: "Mobile Tablets",
        image_Url:
            "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
    },
    {
        id: 9,
        title: "Music and Gaming",
        subTitle: "Music Gaming",
        image_Url:
            "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
    },
    {
        id: 10,
        title: "Others",
        subTitle: "Others",
        image_Url:
            "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
    },
];

// Product Data
export const productData = [
    {
        category: "Computers and Laptops",
        name: "MacBook Pro M2",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
            },
            {
                public_id: "test",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
            },
        ],
        shop: {
            name: "Apple inc.",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 1099,
        discount_price: 1049,
        rating: 4,
        total_sell: 35,
        stock: 10,
    },
    {
        category: "Mobile and Tablets",
        name: "Iphone 14 Pro Max",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
            {
                public_id: "test",
                url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
        ],
        shop: {
            name: "Amazon Ltd",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        discount_price: 1099,
        rating: 5,
        total_sell: 80,
        stock: 10,
    },
    {
        category: "Others",
        name: "Fashionable Watch",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
            {
                public_id: "test",
                url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
        ],
        shop: {
            name: "Shahriar Watch House",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 100,
        discount_price: 79,
        rating: 4,
        total_sell: 12,
        stock: 10,
    },
    {
        category: "Shoes",
        name: "New Trend Shoes",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
            {
                public_id: "test",
                url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
        ],
        shop: {
            name: "Alisha Shoes Mart",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 120,
        discount_price: 89,
        rating: 5,
        total_sell: 49,
        stock: 10,
    },
    {
        category: "Music and Gaming",
        name: "Asus Gaming Headphone",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
            },
            {
                public_id: "test",
                url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
            },
        ],
        shop: {
            name: "Asus Ltd",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 300,
        discount_price: 239,
        rating: 4.5,
        reviews: [
            {
                user: {
                    // user object will be here
                },
                comment: "IT's so cool!",
                rating: 5,
            },
        ],
        total_sell: 20,
        stock: 10
    },
    {
        category: "Shoes",
        name: "New Trend Shoes",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
            {
                public_id: "test",
                url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
            },
        ],
        shop: {
            name: "Alisha Shoes Mart",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 120,
        discount_price: 89,
        rating: 5,
        total_sell: 7,
        stock: 10,
    },
    {
        category: "Music and Gaming",
        name: "Asus Gaming Headphone",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
            },
            {
                public_id: "test",
                url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
            },
        ],
        shop: {
            name: "Asus Ltd",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 300,
        discount_price: 239,
        rating: 4.5,
        reviews: [
            {
                user: {
                    // user object will be here
                },
                comment: "IT's so cool!",
                rating: 5,
            },
        ],
        total_sell: 9,
        stock: 10
    },
    {
        category: "Mobile and Tablets",
        name: "Iphone 14 Pro Max",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
            {
                public_id: "test",
                url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
            },
        ],
        shop: {
            name: "Amazon Ltd",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        discount_price: 1099,
        rating: 5,
        total_sell: 5,
        stock: 10,
    },
    {
        category: "Computers and Laptops",
        name: "MacBook Pro M2",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
            },
            {
                public_id: "test",
                url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
            },
        ],
        shop: {
            name: "Apple inc.",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 1099,
        discount_price: 1049,
        rating: 4,
        total_sell: 2,
        stock: 10,
    },
    {
        category: "Others",
        name: "Fashionable Watch",
        description:
            "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
        image_Url: [
            {
                public_id: "test",
                url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
            {
                public_id: "test",
                url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
            },
        ],
        shop: {
            name: "Shahriar Watch House",
            shop_avatar: {
                public_id: "test",
                url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
            },
            ratings: 4.2,
        },
        price: 100,
        discount_price: 79,
        rating: 4,
        total_sell: 4,
        stock: 10,
    },
];