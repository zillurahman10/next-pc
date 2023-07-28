import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;
const ComponentCard = ({ product }) => (
    <Link href={`/product/${product?.id}`}>
        <Card
            hoverable
            style={{
                width: 300,
            }}
            className='border'
            cover={<img alt="example" src={product?.img} />}

        >
            <h1 className='font-bold'>{product?.name}</h1>
            <p>Category: {product?.category}</p>
            <p>Price: {product?.price}</p>
            <p>Status: {product?.status}</p>
            <p>Rating: {product?.rating}</p>
        </Card>
    </Link>
);
export default ComponentCard;