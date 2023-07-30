import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const monitorDetails = ({ monitor }) => {
    return (
        <div>
            <h1>name: {monitor?.name}</h1>
            <p>id: {monitor?._id}</p>
        </div>
    );
};

export default monitorDetails;

monitorDetails.getLayout = function getLayout(page) {
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
        params: { monitorId: product._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/monitor/${params.monitorId}`)
    const data = await res.json()
    return {
        props: {
            monitor: data
        }
    }
}