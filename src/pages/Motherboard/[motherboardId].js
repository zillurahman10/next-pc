import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const motherboardDetails = ({ motherboard }) => {
    return (
        <div>
            <h1>name: {motherboard?.name}</h1>
            <p>id: {motherboard?._id}</p>
        </div>
    );
};

export default motherboardDetails;

motherboardDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/motherboard')
    const data = await res.json()

    const paths = data.map((product) => ({
        params: { motherboardId: product?._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/motherboard/${params.motherboardId}`)
    const data = await res.json()
    return {
        props: {
            motherboard: data
        }
    }
}