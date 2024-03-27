import { useEffect, useState } from 'react';
import { getStoredReadList } from '../../Utilities/LocalStorage';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    //load books 
    const books = useLoaderData();

    // get data from loader by matching stored IDs
    useEffect(() => {
        const storedReadListIds = getStoredReadList();
        if (books.length > 0) {
            const savedReadBooks = books.filter(book => storedReadListIds.includes(book.bookId));
            setShowReadBooks(savedReadBooks);
        }
    }, [])

    // store read book data in the state
    const [showReadBooks, setShowReadBooks] = useState([]);

    return (
        <div>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={showReadBooks} margin={{ top: 50, left: 20, right: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'bookName'} interval={0}></XAxis>
                    <YAxis />
                    <Bar dataKey={'totalPages'} fill="#8884d8" shape={<TriangleBar></TriangleBar>} label={{ position: 'insideTop' }} >

                        {showReadBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}

                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};


export default PagesToRead;