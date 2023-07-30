import RootLayout from '@/components/Layout/RootLayout';
import ComponentCard from '@/components/UI/ComponentCard';
import React from 'react';

const ram = ({ components }) => {
    const ram = components?.data
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top motherboard</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    ram.map(product => <ComponentCard key={product?.id} product={product}></ComponentCard>)
                }
            </div>
        </>
    );
};

export default ram;

ram.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/ram")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}
