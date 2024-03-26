import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="mt-10 lg:mb-32 lg:mt-12">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;