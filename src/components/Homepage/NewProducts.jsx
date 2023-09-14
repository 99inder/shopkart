import star from "../../assets/images/homepage/products/star.svg";
import leftArrow from "../../assets/images/homepage/products/leftArrow.svg";
import rightArrow from "../../assets/images/homepage/products/rightArrow.svg";
import { useEffect, useState } from "react";
import ProductsSlider from "./ProductsSlider";
// import Swiper from "swiper";

const NewProducts = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    // const swiper = new Swiper('.swiper', {
    //     allowSlideNext: true,
    //     allowSlidePrev: true,
    // });

    useEffect(() => {

        (async () => {
            // fetching product categories
            let response = await fetch("https://fakestoreapi.com/products/categories");
            response = await response.json();
            setCategories(response);

            // setting default selected product category
            if (response.length > 0)
                setSelectedCategory(response[0]);
        })()
    }, [])

    return (
        <section
            id='product'
            className='w-full bg-white pt-[4.375rem] pb-[55px] md:pb-[6.5625rem] text-black-black'
        >
            <div className='w-11/12 max-w-maxContent mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Left part */}
                    <div className='relative'>
                        <h2 className='font-syne font-semibold text-[2.5rem] md:text-[4rem] lg:text-[5.625rem] leading-normal'>
                            New products
                        </h2>
                        <div className='w-screen md:w-full h-[1px] bg-black-black absolute lg:bottom-4 flex items-center'>
                            <img className="relative -left-3 md:-left-4" src={star} alt="star.svg" />
                        </div>
                    </div>

                    {/* Right part NAVIGATION BUTTONS */}
                    <div className="hidden md:flex justify-between gap-x-12">
                        <button
                            // onClick={() => swiper.slidePrev()}
                            className="py-5 hover:scale-x-125 transition-all duration-200" type="button"
                        >
                            <img src={leftArrow} alt="leftArror.svg" />
                        </button>
                        <button
                            // onClick={() => swiper.slideNext()}
                            className="py-5 hover:scale-x-125 transition-all duration-200" type="button"
                        >
                            <img src={rightArrow} alt="rightArror.svg" />
                        </button>
                    </div>

                </div>
            </div>

            <div className="w-11/12 max-w-maxContent mx-auto mt-[1.125rem] md:mt-[2.0625rem]">

                <div className="w-full md:grid grid-cols-5 grid-rows-1">

                    <div>
                        <ul className="text-black-black font-work-sans text-[0.875rem] md:text-lg font-normal leading-normal flex gap-x-[0.875rem] md:flex-col gap-y-[1.4375rem] items-center md:items-start justify-center">
                            {
                                categories.length > 0 &&
                                categories.map((category, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`capitalize basis-full md:text-start text-center cursor-pointer ${category === selectedCategory && "text-lg md:text-[1.625rem] font-semibold transition-all duration-200"}`}
                                    >
                                        {category}
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    {/* Slider */}
                    <div className="col-start-2 col-end-6 mt-[41px] md:mt-0">
                        <ProductsSlider selectedCategory={selectedCategory} />
                    </div>

                </div>


            </div>

            {/* Small Devices Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-x-12 mt-[65px]">
                <button
                    // onClick={() => swiper.slidePrev()}
                    className="py-5 hover:scale-x-125 transition-all duration-200" type="button"
                >
                    <img src={leftArrow} alt="leftArror.svg" />
                </button>
                <button
                    // onClick={() => swiper.slideNext()}
                    className="py-5 hover:scale-x-125 transition-all duration-200" type="button"
                >
                    <img src={rightArrow} alt="rightArror.svg" />
                </button>
            </div>
        </section>
    )
}

export default NewProducts