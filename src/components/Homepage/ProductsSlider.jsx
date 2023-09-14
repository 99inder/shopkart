import { Swiper, SwiperSlide } from 'swiper/react';

import "./styles.css"

import 'swiper/css';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductsSlider = ({ selectedCategory }) => {


    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        (async () => {
            // fetching all the products listing
            let response = await fetch("https://fakestoreapi.com/products");
            response = await response.json();

            // setting all the products listing
            setAllProducts(response);
        })();
    }, []);

    // products filtering based on selected category
    useEffect(() => {
        const filteredData = allProducts.filter(product => product.category === selectedCategory);

        console.log(filteredData);

        setFilteredProducts(filteredData);
    }, [selectedCategory])

    return (
        <div className='ml-[6.0625rem] w-full'>
            <Swiper
                slidesPerView={"2"}
                allowSlideNext={true}
                allowSlidePrev={true}
                spaceBetween={"260px"}
                breakpoints={{
                    1350: {slidesPerView: 4}
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