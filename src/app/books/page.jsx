import BookCard from "@/Components/BookCard";

const Books = async () => {

    const res = await fetch('http://localhost:3000/books', {cache: 'no-store'});
    const books = await res.json();

    return (
        <div className="w-11/12 mx-auto my-9">
            <h2 className="mb-6 text-2xl font-bold text-center">Books: {books.length}</h2>
             <div className="grid grid-cols-3 gap-4">
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default Books;