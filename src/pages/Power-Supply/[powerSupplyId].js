import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const powerSupplyDetails = ({ powerSupply }) => {
    return (
        <div>
            <h1>name: {powerSupply?.name}</h1>
            <p>id: {powerSupply?._id}</p>
        </div>
    );
};

export default powerSupplyDetails;

powerSupplyDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/power-supply')
    const data = await res.json()

    const paths = data.map((product) => ({
        params: { powerSupplyId: product?._id }
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/power-supply/${params.powerSupplyId}`)
    const data = await res.json()
    return {
        props: {
            powerSupply: data
        }
    }
}