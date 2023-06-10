import React, { useEffect, useState } from 'react';
import imageDWeb3 from '../assets/images/image-web-3-desktop.jpg';
import imageMobile from '../assets/images/image-web-3-mobile.jpg';

const MainNew = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const renderImage = windowWidth <= 640 ? imageMobile : imageDWeb3;






    return (
        <div className='max-w-5xl lg:pr-9'>

            <img src={renderImage} alt="playground" />
            <div className='lg:grid lg:grid-cols-2 lg:gap-4 lg:m-5 lg:items-center  flex flex-col mb-4'>
                <h1 className='font-extrabold col-span-1 leading-tight text-5xl'>The Bright Future of Web 3.0?</h1>
                <div className='flex flex-col w-5/63/4 h-full justify-evenly'>
                    <p className='text-gray-600 mb-4 md:mb-0  leading-relaxed'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>

                    <button className='text-white tracking-widest bg-red-500 w-auto flex self-start justify-self-start py-3 px-6 cursor-pointer hover:bg-blue-950'>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default MainNew;
