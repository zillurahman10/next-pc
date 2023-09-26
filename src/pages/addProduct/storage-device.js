import RootLayout from '@/components/Layout/RootLayout';
import AddProductCard from '@/components/UI/AddProductCard';
import React from 'react';

const storage = ({ components }) => {
    const storage = components
    return (
        <>
            <h1 className='text-2xl text-center m-12'>Visit the top storage</h1>
            <div className='flex justify-center items-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        storage.map(product => <AddProductCard key={product?.id} product={product}></AddProductCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default storage;

storage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://next-pc-server.vercel.app/storage")
    const data = await res.json()
    return {
        props: {
            components: data
        }
    }
}
