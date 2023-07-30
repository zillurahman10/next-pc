import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const storageDetails = ({ storage }) => {
    return (
        <div>
            <h1>name: {storage?.name}</h1>
            <p>id: {storage?._id}</p>
        </div>
    );
};

export default storageDetails;

storageDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/storage')
    const data = await res.json()

    const paths = data.map((product) => ({
        params: { storageId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/storage/${params.storageId}`)
    const data = await res.json()
    return {
        props: {
            storage: data
        }
    }
}