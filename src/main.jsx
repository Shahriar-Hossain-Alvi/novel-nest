import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Contact from './components/Contact/Contact.jsx';
import Faq from './components/Faq/Faq.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/allBooksData.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/allBooksData.json')
      },
      {
        path: 'pagesToRead',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/allBooksData.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/FAQ',
        element: <Faq></Faq>
      },
      {
        path: '/bookCard/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/allBooksData.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
