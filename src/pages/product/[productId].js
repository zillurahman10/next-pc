import RootLayout from '@/components/Layout/RootLayout';
import React from 'react';

const productDetails = () => {
    return (
        <div>
            Product Details Page. Coming Soon...!
        </div>
    );
};

export default productDetails;

productDetails.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

// export const getStaticProps = async () => {
//     const res = await
//     return {
//         props: {

//         }
//     }
// }