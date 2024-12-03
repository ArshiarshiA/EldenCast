import axios from "axios"
import Link from "next/link"
import AshesBlock from "./ashesBlock"

interface IAshesData{
    image: string,
    name: string
    id: string
}

export default async function AllAshes() {

    const { data } = await (await axios.get('https://eldenring.fanapis.com/api/spirits?limit=64')).data

    return (
        <section className="py-28">
            <div className="h-screen bg-[url('/images/ashesBg.jpg')] pt-32 px-20 bg-[#444444b2] bg-blend-multiply">
                <div className="max-w-[1400px] m-auto capitalize h-full">
                    <h1 className="text-3xl">Some good spirits that you might like.</h1>
                    <Link className="text-[#cbaa6a] underline" href={'/spirits'}>Here Can You See More Spirit</Link>
                    <div className="flex items-center justify-center h-full">
                        {data.sort(() => 0.5 - Math.random()).slice(0, 4).map((item: IAshesData) => (
                            <Link key={item.id} href={`/categories/spirits/${item.id}`} className="w-3/12">
                                <AshesBlock {...item} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}