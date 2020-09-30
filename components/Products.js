import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import ProductGridItem from '@/components/ProductGridItem'
import ProductListItem from '@/components/ProductListItem'

export default function Products({ data }) {
    const router = useRouter()
    const [products, setProducts] = useState(data)
    const [view, setView] = useState('grid')
    const [currentPage, setCurrentPage] = useState(
        router.query.page ? router.query.page : 1,
    )
    const [perPage, setPerPage] = useState(100)
    const [pageCount, setPageCount] = useState(
        Math.ceil(products.length / perPage),
    )
    const pages = [...Array(pageCount).keys()].map(page => page + 1)
    const [paginatedProducts, setPaginatedProducts] = useState([])

    const brands = Array.from(new Set(data.map(({ brand }) => brand))).filter(
        brand => brand !== undefined,
    )

    const sorts = [
        'Best Selling',
        'Price: Low to High',
        'Price: High to Low',
        'Stock',
        'Manufacturer',
        'Instant Rebate',
        'Part Number',
    ]

    const paginate = () => {
        const paginatedItems =
            currentPage === 1
                ? products.slice(0, perPage)
                : products.slice(
                      currentPage * perPage - perPage,
                      currentPage * perPage,
                  )

        setPaginatedProducts(paginatedItems)
    }

    const updatePage = page => {
        setCurrentPage(page)

        router.push({ pathname: router.pathname, query: { page } })
    }

    useEffect(paginate, [currentPage, perPage])

    return (
        <section className="flex-1 md:ml-8">
            <div className="container hidden md:block">
                <img
                    src="https://www.directdial.com/campaigns/2020/HPE-ProLiant-2020-04/HPE-2020-04-1550x65.jpg"
                    alt=""
                    draggable="false"
                />
            </div>

            <div className="hidden mt-6 text-sm text-gray-600 md:block">
                <p>
                    {currentPage === 1 ? 1 : perPage * (currentPage - 1) + 1} -{' '}
                    {Math.min(products.length, perPage * currentPage)} of{' '}
                    {products.length} items found
                </p>
            </div>

            <div className="items-center justify-between hidden px-4 py-5 mt-6 bg-gray-100 rounded-lg md:flex">
                <div className="flex">
                    <button
                        className={classnames(
                            {
                                'text-gray-400': view === 'list',
                            },
                            'focus:outline-none',
                        )}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                    <button
                        className={classnames(
                            {
                                'text-gray-400': view === 'grid',
                            },
                            'focus:outline-none ml-1',
                        )}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <select
                        name="sort"
                        className="px-2 py-2 transition-all duration-150 ease-in-out border rounded-lg outline-none focus:shadow-outline focus:border-gray-400"
                    >
                        {sorts.map(sort => (
                            <option key={sort} value={sort}>
                                Sort by {sort}
                            </option>
                        ))}
                    </select>

                    <select
                        name="brand"
                        className="px-2 py-2 transition-all duration-150 ease-in-out border rounded-lg outline-none focus:shadow-outline focus:border-gray-400"
                    >
                        {brands.map(brand => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>

                    <ul className="flex space-x-1">
                        {pages.map(page => (
                            <li key={page}>
                                <button
                                    onClick={() => updatePage(page)}
                                    className={classnames(
                                        {
                                            'bg-black text-white hover:bg-black':
                                                page === currentPage,
                                            'hover:bg-gray-200':
                                                page !== currentPage,
                                        },
                                        'rounded-full text-sm h-8 w-8 flex items-center justify-center focus:outline-none',
                                    )}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className={classnames(
                    {
                        'grid grid-cols-2 md:grid-cols-5': view === 'grid',
                    },
                    'mt-6',
                )}
            >
                {paginatedProducts.map((product, index) =>
                    view === 'grid' ? (
                        <ProductGridItem
                            product={product}
                            index={index + 1}
                            key={product.id}
                        />
                    ) : (
                        <ProductListItem product={product} key={product.id} />
                    ),
                )}
            </div>

            <div className="flex items-center justify-between mt-8">
                <div className="text-sm text-gray-600">
                    <p>
                        {currentPage === 1
                            ? 1
                            : perPage * (currentPage - 1) + 1}{' '}
                        - {Math.min(products.length, perPage * currentPage)} of{' '}
                        {products.length} items found
                    </p>
                </div>

                <ul className="flex space-x-1">
                    {pages.map(page => (
                        <li key={page}>
                            <button
                                onClick={() => updatePage(page)}
                                className={classnames(
                                    {
                                        'bg-black text-white hover:bg-black':
                                            page === currentPage,
                                        'hover:bg-gray-200':
                                            page !== currentPage,
                                    },
                                    'rounded-full text-sm h-8 w-8 flex items-center justify-center focus:outline-none',
                                )}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
