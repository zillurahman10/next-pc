import RootLayout from '@/components/Layout/RootLayout';
import ComponentCard from '@/components/UI/ComponentCard';
import React from 'react';

const others = ({ components }) => {
    const others = components
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top Components</h1>
            <div className='flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                        others.map(product => <ComponentCard key={product?.id} product={product}></ComponentCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default others;

others.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/others")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}