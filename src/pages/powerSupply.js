import RootLayout from '@/components/Layout/RootLayout';
import ComponentCard from '@/components/UI/ComponentCard';
import React from 'react';

const powerSupply = ({ components }) => {
    const powerSupply = components.data[0].powerSupplyUnit
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top powerSupply</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    powerSupply.map(product => <ComponentCard key={product?.id} product={product}></ComponentCard>)
                }
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
    const res = await fetch("http://localhost:3004/components")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}
