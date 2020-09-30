import Head from 'next/head'
import Filters from '@/components/Filters'
import Products from '@/components/Products'
import data from '@/data'

export default function Home() {
    return (
        <div className="flex items-start p-4">
            <Filters data={data} />

            <Products data={data} />
        </div>
    )
}
