import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { GrNotes } from "react-icons/gr";
import { Link } from 'react-router-dom';

export const ListedReadBook = ({ singleBook }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = singleBook;
    return (
        <div className='grid grid-cols-4 border rounded-2xl p-6 gap-6'>
            <div className='bg-[#1313130D] py-7 rounded-2xl'>
                <img className='h-[230px] mx-auto' src={image} alt="book image" />
            </div>

            <div className='col-span-3 flex flex-col justify-center'>
                <div className='border-b mb-4'>
                    <h2 className='text-2xl font-bold text-[#131313] font-playfair mb-4'>{bookName}</h2>
                    <h4 className='font-medium text-[#131313CC]'>By: {author}</h4>

                    <div className='my-4 flex gap-4'>
                        <p className='text-[#131313] font-bold'>Tags:
                            {tags.map((tag, index) => (
                                <span key={index} className='btn hover:bg-[#23BE0A0D] hover:text-[#23BE0A] hover:border-[#23BE0A]  btn-sm rounded-full bg-[#23BE0A0D] text-[#23BE0A] font-medium badge-outline ml-3'>#{tag}</span>
                            ))}
                        </p>
                        <p className='flex items-center gap-2 text-[#131313CC]'><CiLocationOn></CiLocationOn> Year Of Publishing: {yearOfPublishing}</p>
                    </div>

                    <div className='flex gap-4 pb-5'>
                        <p className='flex gap-2 text-[#13131399]'><LuUsers></LuUsers> Publisher: {publisher}</p>
                        <p className='flex gap-2 text-[#13131399]'><GrNotes></GrNotes> Page: {totalPages}</p>
                    </div>
                </div>


                {/* category, ratind ,button */}
                <div className='flex gap-3'>.
                    <p className='text-[#328EFF] btn rounded-full bg-[#328EFF26]'>Category: {category}</p>
                    <p className='text-[#FFAC33] btn rounded-full bg-[#FFAC3326]'>Rating: {rating}</p>
                    <Link to={`/bookCard/${bookId}`}>
                        <button className='text-white btn rounded-full bg-[#23BE0A]'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ListedReadBook.propTypes = {
    singleBook: PropTypes.object,
}

export default ListedReadBook;


