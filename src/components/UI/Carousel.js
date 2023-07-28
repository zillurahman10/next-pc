import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import banner1 from '../../assets/Banner-1.png'
const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};
const Banner = () => (
    <Carousel autoplay className='mt-[40px] w-full'>
        <div>
            <Image src={banner1} alt='' />
        </div>
        <div>
            <Image src={banner1} alt='' />
        </div>
        <div>
            <Image src={banner1} alt='' />
        </div>
        <div>
            <Image src={banner1} alt='' />
        </div>
    </Carousel>
);
export default Banner;