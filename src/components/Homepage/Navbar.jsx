import star from "../../assets/images/homepage/star-1.svg";
import navbarData from "../../assets/data/navbarData";
import hamburger from "../../assets/images/navbar/hamburger.svg";
import cross from "../../assets/images/navbar/cross.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Common/Header";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='text-white max-w-maxContent w-11/12 mx-auto'>

            {/* LOGO / WISHLIST / BAG */}
            <div className='flex justify-between items-center md:items-baseline pt-[1.1875rem] md:pt-0'>
                <h1 className='font-poppins text-[1.875rem] md:text-[2.5rem] font-[275] leading-[3.75rem] z-0'>
                    <Link to={"/"}>
                        ShopKart
                    </Link>
                </h1>
                <div className='font-work-sans text-[0.875rem] font-extrabold leading-normal hidden md:block z-0'>
                    <Link to="#" className='uppercase'>
                        {`Wishlist (0)`}
                    </Link>
                    <Link to="#" className='uppercase ml-[0.625rem]'>
                        {`Bag (0)`}
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className={`block md:hidden ${!isMenuOpen && "border"} border-white p-[0.1875rem] z-[2]`}
                >
                    <img src={`${isMenuOpen ? cross : hamburger}`} alt="ham.svg" />
                </button>
            </div>

            <div className='w-full h-[1px] bg-white relative bottom-1 flex items-center'>
                <img src={star} alt="star.svg" className="absolute left-[24.1rem] invisible md:visible" />
            </div>

            {/* NAVIAGTION Medium Devices*/}
            <nav className="invisible md:visible font-work-sans text-lg font-bold leading-normal uppercase pl-12 mt-[0.875rem] pb-[6.75rem]">
                <ul className="flex gap-x-[6.625rem]">
                    {
                        navbarData.map(item => {
                            if (item.id === 'product') {
                                return (
                                    <li key={item.id} className="border hover:border-b-0 border-white pr-4 pb-2 hover:pb-[9px] group cursor-pointer">
                                        <div className="relative">
                                            <p className="font-normal">{item.name}</p>
                                            <span className="h-[1px] bg-white w-[0px] group-hover:w-full absolute left-0 transition-all duration-200"></span>
                                            <div className="group-hover:visible group-hover:block hidden invisible border border-t-0 border-white w-[calc(100%+1.125rem)] -left-[1px] absolute pb-[10px]">
                                                <ul className="text-[0.875rem] font-light">
                                                    {
                                                        item.child.map(item => (
                                                            <li
                                                                key={item.id}
                                                                className="pt-[6px]"
                                                            >
                                                                {item.name}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                <li key={item.id} className="pr-3 relative group">
                                    <a href={`#${item.id}`} >
                                        {item.name}
                                    </a>
                                    <span className="h-[1px] bg-white w-[0px] group-hover:w-full absolute left-0 bottom-2 transition-all duration-200"></span>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* SMARTPHONE Navigation */}
            <div className={`fixed md:hidden left-0 top-0 ${isMenuOpen ? "h-[100vh]" : "h-0 hidden"} z-[5] bg-black-black w-screen`}>
                <Header />

                <div className='text-white max-w-maxContent w-11/12 mx-auto'>

                    {/* LOGO / WISHLIST / BAG */}
                    <div className='flex justify-between items-center md:items-baseline pt-[1.1875rem] md:pt-0'>
                        <h1 className='font-poppins text-[1.875rem] md:text-[2.5rem] font-[275] leading-[3.75rem] z-0'>
                            <Link to={"/"}>
                                ShopKart
                            </Link>
                        </h1>
                        <div className='font-work-sans text-[0.875rem] font-normal leading-normal hidden md:block z-0'>
                            <Link to="#" className='uppercase'>
                                {`Wishlist (0)`}
                            </Link>
                            <Link to="#" className='uppercase ml-[0.625rem]'>
                                {`Bag (0)`}
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className={`block md:hidden ${!isMenuOpen && "border"} border-white p-[0.1875rem] z-[2]`}
                        >
                            <img src={`${isMenuOpen ? cross : hamburger}`} alt="ham.svg" />
                        </button>
                    </div>

                    <div className='w-full h-[1px] bg-white relative bottom-1 flex items-center'>
                        <img src={star} alt="star.svg" className="absolute left-[24.1rem] invisible md:visible" />
                    </div>
                </div>

                <ul className="text-center font-work-sans text-lg font-normal leading-normal mt-[99px]">
                    {
                        navbarData.map(item => (
                            <li key={item.id} className="mt-[55px] uppercase">
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(prev => !prev)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar