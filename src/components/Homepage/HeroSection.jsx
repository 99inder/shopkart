import { Link } from "react-router-dom"
import model from "../../assets/images/homepage/model.svg"
import starWheel from "../../assets/images/homepage/star-wheel.svg"
import starBottom from "../../assets/images/homepage/starBottom.svg"
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <div className='w-full bg-black-hero relative overflow-x-hidden overflow-y-hidden'>

            <div id='heroBgTexture' className='text-white pb-60 md:pb-44 w-full'>
                <Navbar />

                {/* VISUALS */}
                <section className='relative mt-[108px] md:mt-[2.625rem]'>
                    <div className='w-11/12 max-w-maxContent mx-auto md:pl-5 font-syne text-[3.4375rem] md:text-[8.4375rem] font-extrabold leading-[69.08%] md:leading-[76%] relative z-[2]'>
                        <div className="absolute md:relative -top-10 md:top-0">
                            <h1>Fresh</h1>
                            <h1 className='font-outline-2 text-transparent relative left-[24%] mt-2 md:mt-0'>2022</h1>
                            <h1 className='relative left-[5.375%] mt-2 md:mt-0'>Look</h1>
                        </div>
                    </div>

                    {/* Orange Rectangle */}
                    <div
                        id="orangeRectangleTexture"
                        className='orangeTexture w-full md:w-[71.5%] h-[324px] md:h-[354.301px] bg-orange absolute right-0 md:-bottom-28 -bottom-44 z-[1] md:z-0'
                    >
                        <div className="hidden lg:block text-[#161615] absolute -right-4 2xl:right-8 bottom-0 mr-[1.4375rem] mb-[3.035625rem] font-work-sans text-sm leading-normal font-normal">
                            <p className="uppercase">Oregon jacket</p>
                            <p>$124</p>
                        </div>

                        {/* Star Wheel SVG */}
                        <img src={starWheel}
                            alt="star_wheel.svg"
                            loading="lazy"
                            className="absolute md:-top-[13.4rem] md:right-[9%] -top-[9.1rem] -right-[165px] md:z-[1]"
                        />

                        {/* Model Image */}
                        <img src={model} alt="model.svg" loading="lazy" className="absolute -bottom-[4.25rem] md:-bottom-[5.8rem] h-[599.295px] md:h-[654.951px] -right-20 md:right-[12%] w-[321px] md:w-[432px] z-[1]" />
                    </div>


                </section>
            </div>




            {/* Line with Star */}
            <div className="absolute left-0 bottom-32 h-[1px] w-[64%] md:w-[68%] bg-white flex items-center z-[1]">
                <img
                    className="absolute -right-[2%] hidden md:block"
                    src={starBottom} alt="star.svg"
                />
                <img
                    className="absolute -right-[2%] w-[47.556px] h-[81.512px]  md:hidden"
                    src={starBottom} alt="star.svg"
                />
            </div>

            {/* See More Button */}
            <div className="w-11/12 max-w-maxContent mx-auto relative md:bottom-16 bottom-10 left-5 z-[1]">
                <Link to="#" className="text-white inline-flex items-center gap-x-2 border-[1px] pb-[3px] border-white">
                    <span>
                        See more
                    </span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66415 9.29595C7.6683 8.24949 7.66814 7.20275 7.66799 6.15636C7.6679 5.51676 7.6678 4.87729 7.66869 4.23809L7.6692 3.87526L7.41263 4.13182L1.85487 9.68941L1.96094 9.79548L1.85487 9.68941C1.64005 9.90423 1.23453 9.90397 1.01651 9.68596L0.313922 8.98339C0.313911 8.98338 0.3139 8.98337 0.313889 8.98336C0.096074 8.76537 0.0957675 8.36005 0.310613 8.14504C0.310624 8.14502 0.310635 8.14501 0.310646 8.145L5.86837 2.58744L6.1244 2.33142L5.76232 2.33138C5.24959 2.33132 4.70196 2.33179 4.13402 2.33227C3.02993 2.33322 1.84907 2.33423 0.698618 2.33157C0.699919 1.9827 0.700896 1.6612 0.701871 1.34019C0.70303 0.95888 0.704186 0.57825 0.705882 0.15322C2.80036 0.159447 4.88104 0.156514 7.09597 0.153392C7.98874 0.152133 8.90331 0.150844 9.8494 0.150112C9.84225 1.9923 9.844 3.81936 9.84584 5.73654C9.84693 6.88257 9.84806 8.06081 9.84734 9.29372C9.56213 9.2945 9.25322 9.29442 8.93494 9.29435C8.51668 9.29424 8.08224 9.29414 7.66415 9.29595Z" fill="white" stroke="white" strokeWidth="0.3" />
                    </svg>
                </Link>

            </div>

        </div>
    )
}

export default HeroSection