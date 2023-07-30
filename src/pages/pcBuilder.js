import RootLayout from '@/components/Layout/RootLayout';
import { Button } from 'antd';
import Link from 'next/link';

const PCBuilderPage = () => {
    return (
        <>
            <h1 className='text-center pt-12 text-2xl font-sans'>Make you dream PC</h1>
            <div className='mt-8'>
                <div className='flex justify-between mx-24 mt-2 border rounded-md p-4'>
                    <div>
                        <h3 className='text-2xl'>CPU / Processor</h3>
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
                    </div>
                    <div>
                        <Link href={'/addProduct/monitor'}>
                            <Button className='w-[150px] h-[50px]'>Choose</Button>
                        </Link>
                    </div>
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