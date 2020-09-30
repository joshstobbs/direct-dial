import Link from 'next/link'
import classnames from 'classnames'

export default function ProductGridItem({ product, index }) {
    return (
        <Link href={product.link}>
            <a className="relative block py-6 transition-shadow duration-150 ease-in-out border-b border-gray-100 hover:shadow-lg">
                {product.savings && (
                    <div className="absolute right-0 hidden px-4 py-2 mr-8 text-xs font-bold text-center text-white uppercase bg-red-600 rounded-md md:block">
                        <p className="relative">
                            Save <br />${product.savings}
                        </p>

                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center -mb-1.5">
                            <div className="w-3 h-3 transform rotate-45 bg-red-600"></div>
                        </div>
                    </div>
                )}

                <div
                    className={classnames(
                        {
                            'md:border-r border-gray-100': index % 5 !== 0,
                        },
                        'px-5 flex flex-col h-full',
                    )}
                >
                    <p className="hidden text-xs text-gray-500 md:block">
                        {product.id}
                    </p>
                    <p className="hidden text-xs font-semibold text-green-400 md:block">
                        Stock: {product.stock}
                    </p>

                    {product.brandImage && (
                        <img
                            src={product.brandImage}
                            alt={product.brand}
                            draggable="false"
                            className="w-32 mx-auto"
                        />
                    )}

                    <img
                        src={product.image}
                        alt={`${product.name} image`}
                        draggable="false"
                        className="object-contain w-40 h-32 mx-auto"
                    />
                    <p className="hidden mt-2 text-xs font-bold leading-5 text-center text-gray-800 md:block bg-gray-50">
                        {product.status}
                    </p>
                    <p className="mt-2 mb-4 overflow-hidden text-sm max-h-20">
                        {product.name}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div>
                            {product.savings && (
                                <p className="text-xs leading-none text-gray-500 line-through">
                                    $
                                    {typeof product.price === 'number'
                                        ? product.price + +product.savings
                                        : product.savings}
                                </p>
                            )}
                            <p className="text-lg font-bold text-gray-800">
                                {typeof product.price === 'number'
                                    ? `$${product.price}`
                                    : product.price}
                            </p>
                        </div>

                        <button className="flex items-center justify-center w-10 h-10 text-white bg-green-500 rounded-full">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </a>
        </Link>
    )
}
