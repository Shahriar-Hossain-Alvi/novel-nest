import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    // navbar menu links
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/listedBooks'>Listed Books</NavLink></li>
        <li><NavLink to='/pagesToRead'>Pages to Read</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to='/FAQ'>FAQ</NavLink></li>
    </>

    return (
        <div>
            <div id="header" className="navbar px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg lg:text-3xl font-bold text-[#131313] p-0">Novel Nest</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn btn-sm md:btn-md lg:btn-md text-lg font-semibold bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:bg-transparent">Sign In</a>
                    <a className="btn btn-sm md:btn-md lg:btn-md text-lg font-semibold text-white bg-[#59C6D2] hover:text-[#59C6D2] hover:bg-transparent">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;