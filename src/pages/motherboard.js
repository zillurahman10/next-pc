import RootLayout from '@/components/Layout/RootLayout';
import ComponentCard from '@/components/UI/ComponentCard';
import React from 'react';

const motherboard = ({ components }) => {
    const motherboard = components
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top motherboard</h1>
            <div className='flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        motherboard.map(product => <ComponentCard key={product?.id} product={product}></ComponentCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default motherboard;

motherboard.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://next-pc-server.vercel.app/motherboard")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}
