import { useState } from 'react'

export default function Filters({ data }) {
    const brands = Array.from(new Set(data.map(({ brand }) => brand))).filter(
        brand => brand !== undefined,
    )

    const statuses = [
        'In Stock',
        'Limited Stock',
        'Instast Rebate',
        'Backordered',
        'Special Order',
        'Download Only',
    ]

    return (
        <div className="hidden w-1/6 min-w-72 md:block">
            <div className="bg-gray-100 w-100">
                <div className="flex items-center justify-center py-3 font-medium text-white bg-gray-900">
                    <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Apply Filters
                </div>

                <div className="p-4">
                    <h3 className="text-lg">Filters</h3>
                    <div className="w-full h-px mt-1 bg-gray-300"></div>

                    <button className="flex items-center mt-4 space-x-1 focus:outline-none">
                        Brand{' '}
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 flex items-center justify-center ml-3">
                            <svg
                                className="w-4 h-4 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            className="w-full py-2 pl-8 pr-2 transition-all duration-150 ease-in-out border rounded-lg outline-none focus:shadow-outline focus:border-gray-400"
                            placeholder="Search Brand"
                        />
                    </div>

                    <ul className="mt-2 space-y-1">
                        {brands.map(brand => (
                            <li key={brand}>
                                <label>
                                    <input type="checkbox" className="mr-2" />{' '}
                                    {brand}
                                </label>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full h-px mt-4 bg-gray-200"></div>

                    <button className="flex items-center mt-4 space-x-1 focus:outline-none">
                        Status{' '}
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <ul className="mt-2 space-y-1">
                        {statuses.map(status => (
                            <li key={status}>
                                <label>
                                    <input type="checkbox" className="mr-2" />{' '}
                                    {status}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center mt-8 space-y-4">
                <img
                    src="https://www.directdial.com/p/page/ds/15-06/images/banners/go/left/2019/november/ViewSonic-Monitors-270x450.jpg"
                    alt=""
                />

                <img
                    src="https://www.directdial.com/p/page/ds/15-06/images/banners/go/left/2019/storyboard/softwareLicensing-270x450.jpg"
                    alt=""
                />

                <img
                    src="https://www.directdial.com/p/page/ds/15-06/images/banners/go/left/2020/january/Lexmark-Go-Line-270x450.jpg"
                    alt=""
                />

                <img
                    src="https://www.directdial.com/campaigns/2020/HPE-ProLiant-2020-05/HPE-2020-05-270x450.jpg"
                    alt=""
                />

                <img
                    src="https://www.directdial.com/p/page/ds/15-06/images/banners/go/left/2020/january/HP-LaserJetPro400-270x450.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}
