import RootLayout from '@/components/Layout/RootLayout';
import ComponentCard from '@/components/UI/ComponentCard';
import React from 'react';

const powerSupply = ({ components }) => {
    const powerSupply = components
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top powerSupply</h1>
            <div className='flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        powerSupply.map(product => <ComponentCard key={product?.id} product={product}></ComponentCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default powerSupply;

powerSupply.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://next-pc-server.vercel.app/power-supply")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}
