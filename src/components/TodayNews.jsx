import React from 'react';

const TodayNews = () => {
    return (
    <div className='w- lg:w-96  bg-blue-950 lg:p-6 text-white my-4 lg:my-0 lg:px-1 '>
            <div className='py-3 px-2'>
            <h1 className='text-yellow-400 text-5xl font-bold m-0 px-1'>New</h1>
            <div className='py-3 px-2 cursor-pointer'>
                <h2 className='md:text-xl py-4 font-bold sm:text-sm hover:text-yellow-400'> Hydrogen VS Electric Cars </h2>
                <p className='font-normal text-gray-400 xl:text-xl sm:text-xs'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr className='bg-gray-700' />
            <div className='py-3 px-2 cursor-pointer'>
                <h2 className='md:text-xl py-4 font-bold sm:text-sm hover:text-yellow-400'> The Downsides of AI Artistry </h2>
                <p className='font-normal text-gray-400 xl:text-xl sm:text-xs'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <hr className='bg-gray-700' />
            <div className='py-3 px-2 cursor-pointer'>
                <h2 className='md:text-xl py-4 font-bold sm:text-sm hover:text-yellow-400'>Is VC Funding Drying Up? </h2>
                <p className='font-normal text-gray-400 xl:text-xl sm:text-xs'> Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    </div>

    );
}

export default TodayNews;
