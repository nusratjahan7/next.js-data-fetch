
const Product = ({ product }) => {

    const {id, name, description, price, category, stock } = product;

    return (
        <div className="card  bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>$ {price}</p>
                <p>{category}</p>
                <p>{description}</p>
                <p>stock available: {stock}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;