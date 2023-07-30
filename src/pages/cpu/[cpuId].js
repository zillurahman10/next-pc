import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const cpuDetails = ({ cpu }) => {
    return (
        <div>
            <h1>name: {cpu?.name}</h1>
            <p>id: {cpu?._id}</p>
        </div>
    );
};

export default cpuDetails;

cpuDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/cpu')
    const data = await res.json()
    console.log(data);

    const paths = data.map((product) => ({
        params: { cpuId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/cpu/${params.cpuId}`)
    const data = await res.json()
    return {
        props: {
            cpu: data
        }
    }
}