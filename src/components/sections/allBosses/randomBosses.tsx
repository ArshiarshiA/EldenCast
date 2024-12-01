import axios from "axios"
import BossBlock from "./bossBlock"
import Link from "next/link"

interface IBossData {
    id: string,
    name: string,
    image: string,
    location: string
    healthPoints: string
}

export default async function RandomBosses() {

    const { data } = await (await axios.get('https://eldenring.fanapis.com/api/bosses?limit=100')).data

    return (
        <div>
            <div className="flex justify-center flex-wrap max-w-[1400px] m-auto">
                {data.sort(() => 0.5 - Math.random()).slice(0, 8).map((item: IBossData) => (
                    <Link key={item.id} href={`/bosses/${item.id}`} className="w-3/12">
                        <BossBlock {...item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}