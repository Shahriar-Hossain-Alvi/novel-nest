import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa6";


const ListedBooks = () => {
    

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className='py-8 text-center bg-[#1313130D] mb-8'>
                <h2 className='text-3xl font-bold text-[#131313]'>Books</h2>
            </div>

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

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;