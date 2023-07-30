import { Button, Card } from 'antd';
import React from 'react';

const AddProductCard = ({ product }) => {
    return (
        <div>
            <Card
                hoverable
                className='border'
                style={{
                    maxWidth: '300px',
                }}
            >
                <img alt="example" src={product?.img} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h1 className='font-bold text-xl mb-2'>{product?.name}</h1>
                    <p>Category: {product?.category}</p>
                    <p>Price: {product?.price}</p>
                    <p>Status: {product?.status}</p>
                    <p>Rating: {product?.rating}</p>
                    <Button className='w-full mt-3'>ADD</Button>
                </div>
            </Card>
        </div>
    );
};

export default AddProductCard;