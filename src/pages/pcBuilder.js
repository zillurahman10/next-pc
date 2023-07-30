import RootLayout from '@/components/Layout/RootLayout';
import { Button } from 'antd';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const PCBuilderPage = () => {

    const { products } = useSelector(state => state.pcBuilder)
    console.log(products);

    const cpuProduct = products.filter(product => product.category === 'CPU')[0];

    const motherboardProduct = products.filter(product => product.category === 'Motherboard')[0]

    const ramProduct = products.filter(product => product.category === 'Ram')[0]

    const powerSupplyProduct = products.filter(product => product.category === 'Power Supply')[0]

    const storageProduct = products.filter(product => product.category === 'Storage')[0]

    const monitorProduct = products.filter(product => product.category === 'Monitor')[0]

    return (
        <>
            <h1 className='text-center pt-12 text-2xl font-sans'>Make you dream PC</h1>
            <div className='mt-8'>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>CPU / Processor</h3>
                        <div className='flex justify-center items-center'>
                            <img src={cpuProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{cpuProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/cpu'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>Motherboard</h3>
                        <div className='flex justify-center items-center'>
                            <img src={motherboardProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{motherboardProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/motherboard'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>Ram</h3>
                        <div className='flex justify-center items-center'>
                            <img src={ramProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{ramProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/ram'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>Power Supply Unit</h3>
                        <div className='flex justify-center items-center'>
                            <img src={powerSupplyProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{powerSupplyProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/power-supply'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>Storage Device</h3>
                        <div className='flex justify-center items-center'>
                            <img src={storageProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{storageProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/storage-device'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>Monitor</h3>
                        <div className='flex justify-center items-center'>
                            <img src={monitorProduct?.img} alt='' className='w-[100px]'></img>
                            <h4>{monitorProduct?.name}</h4>
                        </div>
                    </div>
                    <div>
                        <Link href={'/addProduct/monitor'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center pb-12 mt-5'>
                    {
                        products.length > 6 ?
                            <Button onClick={() => alert('build completed')}>Complete Build</Button>
                            :
                            <Button type='primary' disabled>Complete Build</Button>

                    }
                </div>
            </div>
        </>
    );
};

export default PCBuilderPage;



PCBuilderPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}