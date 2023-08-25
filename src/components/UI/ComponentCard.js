import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
const { Meta } = Card;
const ComponentCard = ({ product }) => (
    <Link href={`/${product?.category}/${product?._id}`}>
        <Card
            hoverable
            className='border'
            style={{
                maxWidth: '300px',
            }}
        >
            <img alt="example" src={product?.img} className="w-[80% ] object-cover" />
            <div className="p-4">
                <h1 className='font-bold text-xl mb-2'>{product?.name}</h1>
                <p>Category: {product?.category}</p>
                <p>Price: {product?.price}</p>
                <p>Status: {product?.status}</p>
                <p>Rating: {product?.rating}</p>
            </div>
        </Card>
    </Link>

);
export default ComponentCard;