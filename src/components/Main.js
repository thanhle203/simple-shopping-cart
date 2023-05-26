import Products from "./Products";

export default function Main(props) {
    const {products} = props;
    return (
        <div className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((product) => (
                    <Products key={product.id} product={product}></Products>
                ))}
            </div>
        </div>
    )
}