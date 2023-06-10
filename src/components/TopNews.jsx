import React from 'react';
import imagepcs from "../assets/images/image-retro-pcs.jpg";
import imageLaptops from "../assets/images/image-top-laptops.jpg";
import imageGaming from "../assets/images/image-gaming-growth.jpg";


const TopNews = () => {
    return (
        <div className='flex flex-col items-start  md:grid md:grid-cols-12  xl:py-16'>
            <div className='flex  flex-row my-4 md:p-2 md:mx-2 xl:m-0 xl:p-0 col-span-4 '>
                <img src={imagepcs} alt='retro pc' className='lg:h-40 h-36 mr-3' />
                <div className='flex-col lg:pl-3 lg:w-max '>
                <h1 className='lg:mb-2  m-0 p-0 text-gray-600 font-bold'>01</h1>
                <h3 className='font-extrabold text-base lg:text-xl pb-3 cursor-pointer hover:text-red-500'>Reviving Retro PCs</h3>
                <p className='text-gray-600 lg:text-sm m-0 w-3/4'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='flex  flex-row my-4 md:p-2 md:mx-2 xl:m-0 xl:p-0 col-span-4'>
                <img src={imageLaptops} alt='retro pc' className='lg:h-40 h-36 mr-3'/>
                <div className='flex-col lg:pl-3 '>
                <h1 className='lg:mb-2  m-0 p-0 text-gray-600 font-bold'>02</h1>
                <h3 className='font-extrabold text-base lg:text-xl pb-3 cursor-pointer hover:text-red-500'>Top 10 Laptops of 2022</h3>
                <p className='text-gray-600 lg:text-sm m-0 w-3/4'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex  flex-row my-4 md:p-2 md:mx-2 xl:m-0 xl:p-0 col-span-4'>
                <img src={imageGaming} alt='retro pc' className='lg:h-40 h-36 mr-3'/>
                <div className='flex-col lg:pl-3 '>
                <h1 className='lg:mb-2 m-0 p-0 text-gray-600 font-bold'>03</h1>
                <h3 className='font-extrabold ttext-base lg:text-xl pb-3 cursor-pointer hover:text-red-500'>The Growth of Gaming</h3>
                <p className='text-gray-600 lg:text-sm m-0 w-3/4'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
            
        </div>
    );
}

export default TopNews;
