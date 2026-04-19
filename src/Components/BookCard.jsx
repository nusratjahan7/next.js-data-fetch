
const BookCard = ({ book }) => {

    const { title, description, price, author, stock } = book;

    return (
       <div className="card  bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>$ {price}</p>
                <p>author: {author}</p>
                <p>{description}</p>
                <p>stock available: {stock}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;