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

    const { data } = await axios.get('https://eldenring.fanapis.com/api/bosses?limit=100')
    const sortedData = data.data.sort(() => 0.5 - Math.random()).slice(0, 4);

    return (
        <div>
            <div className="flex justify-center flex-wrap max-w-[1400px] m-auto">
                {sortedData.map((item: IBossData) => (
                    <Link key={item.id} href={`/categories/bosses/${item.id}`} className="w-full min-[480px]:w-6/12 min-[800px]:w-4/12 min-[1100px]:w-3/12">
                        <BossBlock {...item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}