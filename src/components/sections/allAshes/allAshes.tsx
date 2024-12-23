import axios from "axios"
import Link from "next/link"
import AshesBlock from "./ashesBlock"

interface IAshesData{
    image: string,
    name: string
    id: string
}

export default async function AllAshes() {

    const { data } = await axios.get('https://eldenring.fanapis.com/api/spirits?limit=64')
    const sortedData = data.data.sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <section className="py-12 min-[480px]:py-28">
            <div className={`min-[480px]:h-screen bg-[url('/images/ashesBg.jpg')] pt-32 pb-10 px-3 bg-[#44444452] bg-blend-multiply`}>
                <div className="max-w-[1400px] m-auto capitalize h-full">
                    <h1 className="text-3xl">Some good spirits that you might like.</h1>
                    <Link className="text-[#cbaa6a] underline" href={'/categories/spirits'}>Here Can You See More Spirit</Link>
                    <div className="flex items-center justify-center h-full flex-wrap">
                        {sortedData.map((item: IAshesData) => (
                            <Link key={item.id} href={`/categories/spirits/${item.id}`} className="w-full min-[480px]:w-6/12 min-[800px]:w-4/12 min-[1100px]:w-3/12">
                                <AshesBlock {...item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}