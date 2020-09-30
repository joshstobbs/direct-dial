import Carousel from 'react-multi-carousel'

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 3,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: {
            max: 1024,
            min: 0,
        },
        items: 1,
        slidesToSlide: 1,
    },
}

const data = [
    {
        content:
            'We have been partnering together for over 2.5 years in the local community.',
        image:
            'https://www.directdial.com/p/page/ds/15-06/images/clients/startca.png',
    },
    {
        content:
            'DirectDial has been providing excellent service as a preferred supplier for over 14 years.',
        image:
            'https://www.directdial.com/p/page/ds/15-06/images/clients/LondonHydro.png',
    },
    {
        content:
            'We have been doing business with DirectDial for over 16 years. Our Account Manager is very attentive, replies quickly and provides great customer service.',
        image:
            'https://www.directdial.com/p/page/ds/15-06/images/clients/UniversityOfWaterloo.png',
    },
    {
        content:
            'DirectDial has been providing great service throughout the sales process for over 16 years.',
        image:
            'https://www.directdial.com/p/page/ds/15-06/images/clients/UniversityOfToronto.png',
    },
    {
        content:
            'DirectDial has been our preferred supplier for over 16 years, providing excellent service.',
        image:
            'https://www.directdial.com/p/page/ds/15-06/images/clients/StratfordFestival2.png',
    },
]

export default function FooterCarousel() {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-2xl font-bold text-center">
                Our Clients Know Best
            </h2>
            <Carousel
                showDots
                arrows={false}
                ssr
                responsive={responsive}
                infinite
                containerClass="mt-8 container"
            >
                {data.map(item => (
                    <div className="text-center" key={item.image}>
                        <p className="italic">"{item.content}"</p>
                        <img
                            src={item.image}
                            className="mx-auto mt-4"
                            draggable="false"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
