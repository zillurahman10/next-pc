import RootLayout from '@/components/Layout/RootLayout';
import { Divider } from 'antd';
import React from 'react';

const powerSupplyDetails = ({ powerSupply }) => {
    console.log(powerSupply);
    return (
        <div>
            <div>
                <div className='grid justify-center sm:grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <img style={{
                            width: '60%',
                            padding: '50px',
                            margin: '0px'
                        }} src={powerSupply?.img} alt=''></img>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <div>
                                <h1 className='text-left text-2xl text-blue-600 pt-[20px] pl-[-100px]'>{powerSupply?.name}</h1>
                                <div className='flex items-center'>
                                    <p className='font-bold mt-5 mr-2'>Price: <span className='bg-red-100 py-1 px-1 rounded'>{powerSupply?.price}</span></p>
                                    <p className='font-bold mt-5 mr-2'>Rating: <span className='bg-red-100 py-1 px-1 rounded'>{powerSupply?.AvarageRating}</span></p>
                                    <p className='font-bold mt-5'>Status: <span className='bg-red-100 py-1 px-1 rounded'>{powerSupply?.status}</span></p>
                                </div>


                            </div>
                            <div className='mt-8'>
                                <h3 className='text-xl'>Key Features</h3>
                                {
                                    powerSupply?.keyFeatures.map(feature => <>
                                        <p>{feature.title}: {feature.details}</p>
                                    </>)
                                }
                                <p>Category: {powerSupply?.category}</p>
                                <p className='font-bold'>Scroll down to see more <span className='text-green-600'>details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-12 my-2'>
                <Divider>Specification</Divider>
                <div className='border p-5 rounded-md'>
                    <h3 className='text-xl font-bold'>Basic information</h3>
                    {
                        powerSupply?.spec?.map(info => <>
                            <div className='flex justify-start'>
                                <p>
                                    <span className='italic mr-[100px]'>{info.infoName}</span>
                                    <span>:     </span>
                                    <span>{info.infoDetails}</span>
                                </p>
                            </div>
                        </>)
                    }
                </div>
            </div>
            <div className='mx-12 my-2'>
                <Divider>Reviews</Divider>
                <div className='p-5 flex justify-center items-center'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {
                            powerSupply?.review?.map(info => <>
                                <div className='border rounded-md w-[80%] p-5'>
                                    <p>Name: {info.name}</p>
                                    <p>Review: {info.review}</p>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default powerSupplyDetails;

powerSupplyDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://next-pc-server.vercel.app/power-supply')
    const data = await res.json()

    const paths = data.map((product) => ({
        params: { powerSupplyId: product?._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://next-pc-server.vercel.app/power-supply/${params.powerSupplyId}`)
    const data = await res.json()
    return {
        props: {
            powerSupply: data
        }
    }
}