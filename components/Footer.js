const navigation = [
    {
        title: 'Shop',
        links: [
            {
                label: 'Hardware',
                to: 'https://www.directdial.com/p/hardware/hardware.asp',
            },
            {
                label: 'Software',
                to: 'https://www.directdial.com/p/software/software-media.asp',
            },
            {
                label: 'Services',
                to:
                    'https://www.directdial.com/p/services/services-landing.asp',
            },
            {
                label: 'Brands',
                to:
                    'https://www.directdial.com/p/brands/technology-partners.asp',
            },
            {
                label: 'Deals',
                to:
                    'https://www.directdial.com/p/go/go.asp?oby=2&SearchString=Sale%20Products',
            },
        ],
    },
    {
        title: 'DirectDial',
        links: [
            {
                to: 'https://www.directdial.com/p/care/about.asp',
                label: 'About Us',
            },
            {
                to: 'https://www.directdial.com/p/care/contact.asp',
                label: 'Contact Us',
            },
            {
                to:
                    'https://www.directdial.com/p/services/services-testimonials.asp',
                label: 'What Clients Are Saying',
            },
            {
                to: 'https://www.directdial.com/p/care/careers.asp',
                label: 'Careers',
            },
            {
                to:
                    'https://www.directdial.com/affiliate/affiliate-landing.asp',
                label: 'Affiliate Program',
            },
        ],
    },
    {
        title: 'My Account',
        links: [
            {
                to: 'https://www.directdial.com/p/account/login.asp',
                label: 'My Account',
            },
            {
                to:
                    'https://www.directdial.com/p/go/go.asp?oby=2&searchstring=My%20Recently%20Viewed',
                label: 'My Recently Viewed',
            },
        ],
    },
    {
        title: 'Help',
        links: [
            {
                to: 'https://www.directdial.com/p/care/terms.asp#returns',
                label: 'Returns',
            },
            {
                to: 'https://www.directdial.com/p/care/terms.asp',
                label: 'Terms & Conditions',
            },
            {
                to: 'https://www.directdial.com/p/care/accessibility.asp',
                label: 'Acessible Customer Service',
            },
            {
                to: 'https://www.directdial.com/p/care/terms.asp#oursite',
                label: 'Privacy Policy',
            },
            { to: 'https://www.directdial.com/p/care/faq.asp', label: 'FAQs' },
        ],
    },
]

function FooterBar() {
    return (
        <div className="items-center justify-between block px-6 py-2 bg-red-600 md:flex">
            <div class="block md:flex text-center md:text-left items-end text-lg text-white">
                <p className="text-2xl font-semibold">Join our Mailing List</p>
                <p>...and receive Special offers and Product updates</p>
            </div>
            <form action="#0" method="post" className="flex mt-4 md:mt-0">
                <input
                    type="email"
                    className="px-2 py-2 text-xs transition-all duration-150 ease-in-out bg-white rounded-l-full outline-none md:px-4 md:py-3 md:text-sm w-96 focus:shadow-outline"
                    placeholder="Enter your email address"
                />
                <button className="flex items-center justify-center py-2 pl-5 pr-6 text-xs text-white whitespace-no-wrap transition-all duration-150 ease-in-out bg-gray-900 rounded-r-full md:text-sm hover:bg-black focus:outline-none focus:shadow-outline">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <FooterBar />

            <section className="grid grid-cols-2 gap-4 px-4 py-12 md:gap-0 md:grid-cols-6">
                <div className="col-span-2">
                    <a className="block px-2 py-4 w-80">
                        <img
                            src="https://www.directdial.com/p/page/ds/15-06/images/logo/DirectDial-2020-AnnLogo.png"
                            alt="Celebrating 20 years of Direct Dial"
                            draggable="false"
                            className="w-full"
                        />
                    </a>
                    <div className="flex items-center md:ml-16">
                        <svg
                            className="w-12 h-12 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                        </svg>

                        <div className="ml-4">
                            <p className="text-gray-800">
                                Need assistance? <br /> Call us Monday - Friday
                                8:30am - 6:00pm EST
                            </p>
                            <a
                                href="tel:18668079832"
                                className="text-2xl font-bold text-red-600"
                            >
                                1-866-807-9832
                            </a>
                        </div>
                    </div>
                </div>

                {navigation.map(section => (
                    <div key={section.title} className="col-span-1">
                        <h3 className="font-bold text-gray-800">
                            {section.title}
                        </h3>
                        <ul className="mt-4 space-y-4 text-sm">
                            {section.links.map(link => (
                                <li key={link.label}>
                                    <a href={link.to}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <div className="mb-1 text-xs text-right">
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                    className="text-blue-600"
                    href="https://policies.google.com/privacy"
                >
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a
                    className="text-blue-600"
                    href="https://policies.google.com/terms"
                >
                    Terms of Service
                </a>{' '}
                apply.
            </div>

            <div className="items-center justify-between px-4 py-2 text-xs bg-gray-200 md:flex">
                <img
                    src="https://www.directdial.com/p/page/ds/15-06/images/footer/comodo_secure_seal_sm.png"
                    alt="Comodo Secure"
                    draggable="false"
                    className="pr-3 border-gray-400 md:border-r"
                />

                <p className="mt-2 md:mt-0">
                    Copyright ©2020 DirectDial.com. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}
