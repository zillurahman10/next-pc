import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const ramDetails = ({ ram }) => {
    return (
        <div>
            <h1>name: {ram?.name}</h1>
            <p>id: {ram?._id}</p>
        </div>
    );
};

export default ramDetails;

ramDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/ram')
    const data = await res.json()
    console.log(data);

    const paths = data.map((product) => ({
        params: { ramId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/ram/${params.ramId}`)
    const data = await res.json()
    return {
        props: {
            ram: data
        }
    }
}