import React from 'react';
import Button from '@/components/global/Button';


const Hero = () => {
    return (
        <section id='Hero' className='flex relative border-blue-500 justify-center mt-0'>
            <div
                style={{
                    backgroundImage: `url('/assets/images/image.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center", // Ensures the image is centered
                    backgroundAttachment: "scroll", // Keep it scrollable or use 'fixed' if you want it to stay while scrolling
                }}
                className='border-red-500 shadow-lg overflow-hidden flex flex-col items-start px-[80px] xl:px-[300px] w-full max-w-[1920px] h-[303px] lg:h-[668px] xl:h-[668px]'
            >
                <h2 className='text-[32px] lg:text-[80px] lg:w-[800px] lg:h-[330px] lg:borde font-medium leading-[29px] mt-[87.5px] lg:mt-[216px] font-unbounded text-white text-start'>
                    Unlocking 
                    <span className='block lg:mt-[40px] lg:leading-[80px] lg:mb-0 mb-[20px]'> Efficient Energy Solutions  With Hen & Associates</span>
                </h2>
                {/* <h3 className='text-[32px] lg:text-[80px] leading-[20px] lg:mt-[40px] text-white text-center lg:mb-[62px] mb-[32px]'>
                </h3> */}
                <Button
                    hidden='hidden'
                    link='/involved'
                    text='Learn More'
                    fontType='font-unbounded'
                    className='!border-0 bg-white text-black lg:px-[40px] rounded-[40px] hover:!text-black'
                    textColor={'text-primary'}
                    hoverBG='hover:bg-[#fff]'
                />
            </div>
        </section>


    );
};

export default Hero;
