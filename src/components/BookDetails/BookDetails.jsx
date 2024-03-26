import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveWishList } from "../../Utilities/LocalStorage";

const BookDetails = () => {
    // load all books data
    const books = useLoaderData();

    // get the dynamic id as integer
    const { id } = useParams();
    const idInt = parseInt(id);

    //get the data for the current id
    const book = books.find(b => b.bookId === idInt);

    //state for read button control
    const [clickedReadBtn, setClickedReadBtn] = useState(false);

    const handleReadbtn = () => {
        if (clickedReadBtn) {
            toast.error('You have already read this book');
        }
        else {
            toast('Marked As Read');
            setClickedReadBtn(true);
        }
    }

    //state for wishlist button control
    const [clickedListBtn, setClickedListBtn] = useState(false);

    const handleWishListbtn = () => {
        if (clickedListBtn) {
            if (clickedReadBtn) {
                toast.error('This book is read');
            }
            else {
                toast.error('Already in you wishlist');
            }
        }
        else {
            if (clickedReadBtn) {
                toast.error('This book is read');
            }
            else {
                saveWishList(idInt);
                toast('Added to your Wishlist');
                setClickedListBtn(true);
            }
        }
    }




    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 mt-10 gap-12 mb-40">
            {/* book details image */}
            <div className="bg-[#1313130D] p-8 lg:p-20 flex justify-center">
                <img className="w-3/4" src={book.image} alt="" />
            </div>


            {/* book details description */}
            <div className="flex flex-col justify-center px-4">
                <div className="pb-6 border-b border-[#13131326]">
                    <h2 className="text-4xl font-bold text-[$131313] font-playfair pb-4">{book.bookName}</h2>
                    <h4 className="text-xl font-medium text-[#131313CC]">By: {book.author}</h4>
                </div>

                <h3 className="py-4 text-xl font-medium text-[#131313CC]">{book.category}</h3>

                <div className="py-6 space-y-6 border-y border-[#13131326]">
                    <h3 className="text-[#131313] font-bold">Review: <span className="text-[#131313B3]">{book.review}</span></h3>
                    <h3 className="text-[#131313] font-bold">Tag:
                        {
                            book.tags.map((tag, idx) => (
                                <>
                                    <p key={idx} className="btn hover:bg-[#23BE0A0D] hover:text-[#23BE0A] hover:border-[#23BE0A]  btn-sm rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium badge-outline ml-3">#{tag}</p>
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
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button onClick={handleReadbtn} className="btn text-lg font-semibold bg-[#23BE0A] text-white hover:bg-transparent hover:text-[#23BE0A]">Read</button>

                    <button onClick={handleWishListbtn} className="btn text-lg font-semibold bg-[#50B1C9] text-white hover:bg-transparent hover:text-[#50B1C9]">Wishlist</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;