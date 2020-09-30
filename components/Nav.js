import Link from 'next/link'

const links = [
    { label: 'Hardware', to: '/' },
    { label: 'Software', to: '/' },
    { label: 'Services', to: '/' },
    { label: 'Brands', to: '/' },
    { label: 'Deals', to: '/' },
]

function NavSearch() {
    return (
        <div className="flex items-center justify-center px-6 py-2 bg-red-600 md:justify-between">
            <button className="items-center hidden text-lg font-bold text-white md:flex">
                Product Categories
                <svg
                    className="w-6 h-6 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <form action="#0" method="post" className="flex">
                <input
                    type="search"
                    className="w-56 px-4 py-3 text-sm transition-all duration-150 ease-in-out bg-white rounded-l-full outline-none md:w-96 focus:shadow-outline"
                    placeholder="Search for products"
                />
                <button className="flex items-center justify-center py-2 pl-5 pr-6 text-white transition-all duration-150 ease-in-out bg-gray-900 rounded-r-full hover:bg-black focus:outline-none focus:shadow-outline">
                    <svg
                        className="w-4 h-4"
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
                </button>
            </form>
        </div>
    )
}

export default function Nav() {
    return (
        <nav className="sticky top-0 z-10 bg-white">
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center">
                    <Link href="/">
                        <a className="block w-40 px-2 py-4 md:w-64">
                            <img
                                src="https://www.directdial.com/p/page/ds/15-06/images/logo/DirectDialLogo-2019.png"
                                alt="Direct Dial IT Solutions For Business"
                                draggable="false"
                                className="w-full"
                            />
                        </a>
                    </Link>

                    <img
                        src="https://www.directdial.com/p/page/ds/15-06/images/flags/CA.png"
                        alt=""
                        draggable="false"
                        className="hidden md:block"
                    />
                </div>

                <div className="flex items-center space-x-4 md:hidden">
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>

                <div className="hidden divide-y md:block">
                    <div className="flex items-center justify-between px-2">
                        <a
                            href="tel:18668079832"
                            className="flex items-center py-2 text-xs transition-colors duration-150 ease-in-out hover:text-red-600"
                        >
                            <svg
                                className="w-2 h-2 mr-1 text-red-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            1-866-807-9832
                        </a>

                        <span className="h-4 w-0.5 bg-gray-200"></span>

                        <a
                            href="mailto:sales@directdial.com"
                            className="flex items-center py-2 text-xs transition-colors duration-150 ease-in-out hover:text-red-600"
                        >
                            <svg
                                className="w-3 h-3 mr-1 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            sales@directdial.com
                        </a>

                        <span className="h-4 w-0.5 bg-gray-200"></span>

                        <button className="flex items-center py-2 text-xs focus:outline-none">
                            <img
                                src="https://www.directdial.com/p/page/ds/15-06/images/flags/CA.png"
                                alt=""
                                draggable="false"
                                className="h-2 mr-2"
                            />
                            EN - $CAD
                        </button>

                        <span className="h-4 w-0.5 bg-gray-200"></span>

                        <a
                            href="https://www.directdial.com/p/account/login.asp"
                            className="py-2 text-xs transition-colors duration-150 ease-in-out hover:text-red-600"
                        >
                            Sign In
                        </a>
                    </div>
                    <div>
                        <ul className="flex">
                            {links.map(link => (
                                <li key={link.label}>
                                    <Link href={link.to}>
                                        <a className="block px-4 py-2 text-sm font-bold">
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <NavSearch />
        </nav>
    )
}
