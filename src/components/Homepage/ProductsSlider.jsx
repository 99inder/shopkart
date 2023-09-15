import { useEffect, useState } from 'react';
//Importing API Link
import { PRODUCTS_API } from '../../services/apis';

import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./styles.css"

import 'swiper/css';
import 'swiper/css/navigation';

const ProductsSlider = ({ selectedCategory }) => {


    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        (async () => {
            // fetching all the products listing
            let response = await fetch(PRODUCTS_API);
            response = await response.json();

            // setting all the products listing
            setAllProducts(response);
        })();
    }, []);

    // products filtering based on selected category
    useEffect(() => {
        const filteredData = allProducts.filter(product => product.category === selectedCategory);

        setFilteredProducts(filteredData);

        // eslint-disable-next-line
    }, [selectedCategory, allProducts]);

    return (
        <div className='md:ml-[6.0625rem] w-full'>
            <Swiper
                slidesPerView={"2"}
                // loop={true}
                allowSlideNext={true}
                allowSlidePrev={true}
                spaceBetween={"280px"}
                breakpoints={{
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: "260px"
                    },
                }}
                className="mySwiper absolute">
                {
                    filteredProducts.length > 0 &&
                    filteredProducts.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}

export default ProductsSlider