import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;


    // display book cards
    return (
        <div>
            <Link to={`/bookCard/${bookId}`}>
                {/* single book card start */}
                <div className="border md:rounded-2xl lg:rounded-2xl border-[#13131326] p-6 flex flex-col">
                    {/* image */}
                    <div className="bg-[#F3F3F3] flex justify-center items-center py-8 rounded-2xl">
                        <img className='h-60' src={image} alt="book image" />
                    </div>

                    {/* tags */}
                    <div className="flex gap-3 pt-6">
                        {
                            tags.map((tag, index) => (
                                <>
                                    <span key={index} className="btn hover:bg-[#23BE0A0D] hover:text-[#23BE0A] hover:border-[#23BE0A]  btn-sm rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium badge-outline">{tag}</span>
                                </>
                            ))
                        }
                    </div>

                    {/* name */}
                    <div className="py-4 border-b border-dashed border-[#13131326] space-y-4">
                        <h2 className="text-2xl font-bold text-[#131313] font-playfair">{bookName}</h2>
                        <p className="font-medium text-[#131313CC]">By : {author}</p>
                    </div>

                    {/* category */}
                    <div className="pt-5 flex justify-between">
                        <h4 className="text-[#131313CC] font-medium">{category}</h4>
                        <div className="flex items-center gap-2">
                            <p className="text-[#131313CC] font-medium">{rating}</p>
                            <FaRegStar className="h-3"></FaRegStar>
                        </div>
                    </div>
                </div>
                {/* single book card end */}
            </Link>
        </div>
    );
};


BookCard.propTypes = {
    book: PropTypes.object.isRequired,
}

export default BookCard;