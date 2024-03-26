import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex justify-center items-center min-h-screen">
            <div>
                <h1 className="text-9xl font-black text-red-500 mb-3">404</h1>
                <h4 className="text-3xl font-medium font-playfair mb-4">The page you are looking for is not found</h4>
                <p className="text-lg font-light mb-6">Make sure your internet connection is on OR you have typed the right url</p>
                <Link to="/">
                    <button className="btn btn-error text-white hover:bg-transparent hover:text-black">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;