import star from "../../assets/images/homepage/star-1.svg";
import navbarData from "../../assets/data/navbarData";

const Navbar = () => {
    return (
        <div className='text-white max-w-maxContent w-11/12 mx-auto'>

            {/* LOGO / WISHLIST / BAG */}
            <div className='flex justify-between items-baseline'>
                <h1 className='font-poppins text-[2.5rem] font-[275] leading-[3.75rem]'>
                    ShopKart
                </h1>
                <div className='font-work-sans text-[0.875rem] font-normal leading-normal'>
                    <span className='uppercase'>
                        {`Wishlist (0)`}
                    </span>
                    <span className='uppercase ml-[0.625rem]'>
                        {`Bag (0)`}
                    </span>
                </div>
            </div>

            <div className='w-full h-[1px] bg-white relative bottom-1 flex items-center'>
                <img src={star} alt="star.svg" className="absolute left-[24.1rem]" />
            </div>

            {/* NAVIAGTION */}
            <nav className="font-work-sans text-lg font-bold leading-normal uppercase pl-12 mt-[0.875rem] pb-[6.75rem]">
                <ul className="flex gap-x-[6.625rem]">
                    {
                        navbarData.map(item => {
                            if (item.id === 'product') {
                                return (
                                    <li key={item.id} className="border hover:border-b-0 border-white pr-4 pb-2 hover:pb-[9px] group cursor-pointer">
                                        <div className="relative">
                                            <p className="border-b-[1px] border-white ">{item.name}</p>
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
                                <li key={item.id} className="pr-3 cursor-pointer relative">
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

        </div>
    )
}

export default Navbar