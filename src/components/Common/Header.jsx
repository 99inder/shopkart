import truck from "../../assets/images/header/truck.svg";
import facebook from "../../assets/images/header/facebook.svg";
import linkedin from "../../assets/images/header/linkedin.svg";
import twitter from "../../assets/images/header/twitter.svg";
import instagram from "../../assets/images/header/instagram.svg";

const Header = () => {
    return (
        <header className="w-full h-[2.625rem] font-poppins bg-black-header text-black-header-text">

            <div className="w-11/12 h-full max-w-maxContent mx-auto flex items-center justify-between">

                {/* Left Section of TOP HEADER */}
                <div className="text-xs font-normal leading-normal flex gap-x-[0.875rem]">

                    <div className="capitalize flex gap-x-[0.4375rem]">
                        <img src={truck} alt="truck.svg" />
                        <span className="min-w-fit">Free Delivery</span>
                    </div>

                    <span className="w-[1px] h-[19px] bg-black-header-text"></span>

                    <span className="capitalize">
                        Return Policy
                    </span>
                </div>

                {/* Right Section of TOP HEADER */}
                <div className="text-[0.625rem] font-normal leading-normal">
                    <div className="flex gap-x-[2.1875rem]">
                        <p>Login</p>
                        <div className="flex gap-x-[0.875rem]">
                            <p>Follow US</p>

                            <div className="flex gap-x-3">
                                <img src={facebook} alt="facebook.svg" />
                                <img src={linkedin} alt="linkedin.svg" />
                                <img src={twitter} alt="twitter.svg" />
                                <img src={instagram} alt="instagram.svg" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header