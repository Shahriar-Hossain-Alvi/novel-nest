import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../Utilities/LocalStorage';
import ListedReadBook from '../ListedReadBook/ListedReadBook';


const ListedBooks = () => {
    // for react tabs
    const [tabIndex, setTabIndex] = useState(0);

    //load books 
    const books = useLoaderData();

    // get data from loader by matching stored IDs
    useEffect(() => {
        const storedReadListIds = getStoredReadList();
        if (books.length > 0) {
            const savedReadBooks = books.filter(book=> storedReadListIds.includes(book.bookId));
            setShowReadBooks(savedReadBooks);
        }
    }, [])

    // store data in the state
    const [showReadBooks, setShowReadBooks] = useState([]);
    console.log(showReadBooks);

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

                <TabPanel>
                    <h2 className='text-2xl'>Read Books: {showReadBooks.length}</h2>
                    <div>
                        {
                            showReadBooks.map(singleBook=> <ListedReadBook key={singleBook.bookId} singleBook={singleBook}></ListedReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;