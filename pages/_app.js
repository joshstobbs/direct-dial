import '@/styles/tailwind.css'
import 'react-multi-carousel/lib/styles.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FooterCarousel from '@/components/FooterCarousel'

function MyApp({ Component, pageProps }) {
    return (
        <main className="font-sans antialiased text-gray-700">
            <Nav />
            <Component {...pageProps} />
            <FooterCarousel />
            <Footer />
        </main>
    )
}

export default MyApp
