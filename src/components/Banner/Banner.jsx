import { Link } from "react-router-dom";
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="mb-24">
            <div className="hero bg-[#1313130D]  md: rounded-3xl lg:rounded-3xl py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="w-1/2 flex justify-center items-center">
                        <img className="" src={banner} alt="banner-book" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-6xl text-[#131313] font-playfair font-bold leading-[70px] mb-12">Books to freshen up your bookshelf</h1>
                        <Link to='/listedBooks'><button className="btn btn-lg bg-[#23BE0A] text-xl font-bold text-white hover:text-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A]">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;