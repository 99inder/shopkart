import productButton from "../../assets/images/homepage/products/product_button.svg";

const ProductCard = ({ product }) => {
    return (
        <div className='w-[19.375rem]'>

            {/* Product Image */}
            <div className='w-full h-[20.75rem] bg-gray-200 bg-opacity-50 relative'>
                <img
                    className='w-full h-full object-contain mix-blend-darken'
                    src={product.image} alt="product_img"
                />
                <button type='button'>
                    <img className='absolute right-0 bottom-0 hover:scale-110 transition-all duration-200' src={productButton} alt="open.html" />
                </button>
            </div>

            {/* Product Details */}
            <div className='flex flex-col gap-y-2 text-left px-2 pt-3'>
                <p className='text-black-black font-syne font-semibold leading-normal text-[1.625rem]'>{product.title.slice(0, 15)}</p>

                <p className='font-work-sans text-sm font-normal leading-normal'>
                    {product.description.slice(0, 100) + "..."}
                </p>

                <p className='font-syne text-[1.625rem] font-semibold leading-normal'>
                    ${product.price}
                </p>

            </div>
        </div>
    )
}

export default ProductCard