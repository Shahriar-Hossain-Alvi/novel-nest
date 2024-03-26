import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    // load all books data
    const books = useLoaderData();

    // get the dynamic id as integer
    const { id } = useParams();
    const idInt = parseInt(id);

    //get the data for the current id
    const book = books.find(b => b.bookId === idInt);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12 mb-40">
            {/* book details image */}
            <div className="bg-[#1313130D] p-8 lg:p-20 flex justify-center">
                <img className="w-3/4" src={image} alt="" />
            </div>


            {/* book details description */}
            <div className="flex flex-col justify-center px-4">
                <div className="pb-6 border-b border-[#13131326]">
                    <h2 className="text-4xl font-bold text-[$131313] font-playfair pb-4">{bookName}</h2>
                    <h4 className="text-xl font-medium text-[#131313CC]">By: {author}</h4>
                </div>

                <h3 className="py-4 text-xl font-medium text-[#131313CC]">{category}</h3>

                <div className="py-6 space-y-6 border-y border-[#13131326]">
                    <h3 className="text-[#131313] font-bold">Review: <span className="text-[#131313B3]">{review}</span></h3>
                    <h3 className="text-[#131313] font-bold">Tag:
                        {
                            tags.map(tag => (
                                <>
                                    <span className="btn hover:bg-[#23BE0A0D] hover:text-[#23BE0A] hover:border-[#23BE0A]  btn-sm rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium badge-outline ml-3">#{tag}</span>
                                </>
                            ))
                        }
                    </h3>
                </div>

                <div className="flex gap-16 pt-6 pb-8">
                    <div className="text-[#131313B3]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-semibold text-[#131313]">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Link>
                        <button className="btn text-lg font-semibold bg-[#23BE0A] text-white hover:bg-transparent hover:text-[#23BE0A]">Read</button>
                    </Link>
                    <Link>
                        <button className="btn text-lg font-semibold bg-[#50B1C9] text-white hover:bg-transparent hover:text-[#50B1C9]">Wishlist</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;