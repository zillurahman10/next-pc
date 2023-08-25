import { addToPcBuilder } from '@/redux/features/pcBuilder/pcBuilderSlice';
import { Button, Card } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const AddProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const handleAddProduct = () => {
        dispatch(addToPcBuilder(product))
        router.push('/pcBuilder');
    }
    return (
        <div>
            <Card
                hoverable
                className='border'
                style={{
                    maxWidth: '300px',
                }}
            >
                <img alt="example" src={product?.img} className="w-full object-cover" />
                <div className="p-4">
                    <h1 className='font-bold text-xl mb-2'>{product?.name}</h1>
                    <p>Category: {product?.category}</p>
                    <p>Price: {product?.price}</p>
                    <p>Status: {product?.status}</p>
                    <p>Rating: {product?.rating}</p>
                    <Button onClick={() => handleAddProduct()} className='w-full mt-3'>ADD</Button>
                </div>
            </Card>
        </div>
    );
};

export default AddProductCard;