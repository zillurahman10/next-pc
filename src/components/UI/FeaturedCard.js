import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
const FeaturedCard = ({ info }) => {
    console.log(info);
    return (
        <Link href={`${info?.link}`}>
            <div className="flex justify-center items-center">
                <div className='w-[50%]'>
                    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                        <div className='flex justify-center items-center'>
                            <img alt="example" src={info?.img} className="w-24 h-auto object-cover" />
                        </div>
                        <div className="px-4 py-2">
                            <h3 className="text-gray-900 text-xl mb-2 text-center">{info?.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

};
export default FeaturedCard;