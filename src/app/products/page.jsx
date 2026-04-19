import Product from "@/Components/Product";

const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products', { cache: 'force-cache'});
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div className="w-11/12 mx-auto my-9">
            <h2 className="mb-6 text-center text-2xl font-bold">Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;