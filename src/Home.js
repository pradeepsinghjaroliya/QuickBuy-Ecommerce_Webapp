import React from 'react';
import "./Home.css";
import Product from "./Product.js"
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                src="https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/ad1.png"
                 alt=""/>
                {/*product display*/}
                {/*1st row */} 
                <div className="home_row">
                    {/*1 col */}
                    <Product
                        id="1001"
                        title="Hanes Men's Full-Zip Eco-Smart Fleece Hoodie" 
                        price={20.99}
                        image="https://m.media-amazon.com/images/I/817EoIxv-8L._AC_UL320_.jpg"
                        rating={5}
                    />
                    {/*2 col */}
                    <Product
                        id="1002"
                        title="Mast & Harbour
                        Men Navy Blue & Mustard Yellow Round Neck T-shirt" 
                        price={30.99}
                        image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11700074/2020/9/3/399f940e-d5ef-4976-8bf5-f723d4aa16201599121831638-Mast--Harbour-Men-Tshirts-9761599121830062-1.jpg"
                        rating={4}
                    />
                    {/*3 col */}
                    <Product
                        id="1003"
                        title="Roadster
                        Women Black Solid Round Neck T-shirt" 
                        price={18.69}
                        image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10969776/2020/1/24/7ffe1797-42af-4fb5-8b52-9d9642c41d561579867814320-Roadster-Women-Tshirts-5061579867812499-1.jpg"
                        rating={5}
                    />
                
                </div> 
                {/*2nd row */}
                <div className="home_row">
                    {/*1 col */}
                    <Product
                        id="2001"
                        title="LG Ultragear 27 inch, 4K-UHD, Nano IPS 144Hz, 1ms G-Sync Compatible Gaming Monitor - with VESA HDR 600 - Display Port, HDMI, USB up/Down, HAS Stand, RGB Sphere Lighting - 27GN950 (Black)" 
                        price={1001.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Cn04gV7bL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="2002"
                        title="New Apple iPhone 11 (64GB) - Black" 
                        price={1045.29}
                        image="https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
                        rating={5}
                    />

                </div>
                {/*3rd row */}
                <div className="home_row">
                <Product
                        id="3001"
                        title="Biggest Fly Extra Thick Yoga and Exercise Mat" 
                        price={49.99}
                        image="https://m.media-amazon.com/images/I/41gbv0RmiiL._AC_SY161_.jpg"
                        rating={3}
                    />
                   <Product
                        id="3002"
                        title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Do0NLYmDL._SX445_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product
                        id="3003"
                        title="ComicSense.xyz Re-Usable Unisex Ghoul Anime Printed Cotton Mask (Free Size)" 
                        price={11.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Wz0m-ph6L._UL1467_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home
