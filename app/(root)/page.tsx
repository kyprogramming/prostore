// export const metadata = { title: "Home" };

// const delay = (ms: number) => new Promise((resolve) => { setTimeout(resolve, ms) });

// const HomePage = async () => {

// import sampleData from "@/db/sample-data";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.action";

const HomePage =async () => {
    // await delay(2000); 
    const newProducts = await getLatestProduct();
    console.log(newProducts);
    return (
        <>
            <ProductList data={newProducts} title="New Arrival" />
        </>
    );
};

export default HomePage;
