import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList, getStoredWishList } from '../../Utilities/LocalStorage';
import ListedReadBook from '../ListedReadBook/ListedReadBook';
import ListedWishlistBook from '../ListedWishlistBook/ListedWishlistBook';


const ListedBooks = () => {
    // for react tabs
    const [tabIndex, setTabIndex] = useState(0);

    //load books 
    const books = useLoaderData();

    // get data from loader by matching stored IDs
    useEffect(() => {
        const storedReadListIds = getStoredReadList();
        const storedWishListIds = getStoredWishList();
        if (books.length > 0) {
            const savedReadBooks = books.filter(book=> storedReadListIds.includes(book.bookId));
            setShowReadBooks(savedReadBooks);

            const savedWishBooks = books.filter(book=>storedWishListIds.includes(book.bookId));
            setShowWishBooks(savedWishBooks);
        }
    }, [])

    // store read book data in the state
    const [showReadBooks, setShowReadBooks] = useState([]);

    // store wishlisted book data in the state
    const [showWishbooks, setShowWishBooks] = useState([]);



    return (
        <div>
            <div className='py-8 text-center bg-[#1313130D] mb-8'>
                <h2 className='text-3xl font-bold text-[#131313]'>Books</h2>
            </div>


            {/* Sort Button */}
            <div className='flex justify-center items-center pb-14'>
                <details className="dropdown">
                    <summary className="m-1 btn text-lg font-semibold text-white bg-[#23BE0A]">Sort By <FaAngleDown></FaAngleDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating </a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>


            {/* tabs */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                {/* read books list */}
                <TabPanel>
                    <div className='pt-8 flex flex-col gap-6'>
                        {
                            showReadBooks.map(singleBook=> <ListedReadBook key={singleBook.bookId} singleBook={singleBook}></ListedReadBook>)
                        }
                    </div>
                </TabPanel>

                {/* wishlist books */}
                <TabPanel>
                    <div>
                        {
                            showWishbooks.map(singleBook=><ListedWishlistBook key={singleBook.bookId} singleBook={singleBook}></ListedWishlistBook>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;