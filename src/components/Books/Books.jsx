import BookCard from "../BookCard/BookCard";
import { useLoaderData } from "react-router-dom";

const Books = () => {
    const books = useLoaderData();
    //store all books data

    return (
        <div>
            <h2 className="text-center text-5xl font-bold font-playfair text-[#131313] mb-9">Books</h2>

            {/* all books card container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>

        </div>
    );
};

export default Books;