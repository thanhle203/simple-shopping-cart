export default function Products(props) {
    const {product} = props;
    return (
        <div className='card'>
            <img className='small' srx={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}