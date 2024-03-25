import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex justify-center items-center min-h-screen">
            <div>
                <h1>404</h1>
                <h2>ERROR!</h2>
                <h4>The page you are looking fot is not found</h4>
                <p>Make sure your internet connection is on and you typed the right url</p>
                <Link to="/">
                    <button className="btn btn-error text-white">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;