import Products from "./Products";

export default function Main(props) {
    const {cartItems, onAdd, onRemove, products} = props;
    return (
        <div className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((product) => (
                    <Products key={product.id} item={cartItems.find((x) => x.id === product.id)} onAdd={onAdd} onRemove={onRemove} product={product}></Products>
                ))}
            </div>
        </div>
    )
}