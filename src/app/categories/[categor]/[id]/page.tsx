'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, usePathname } from "next/navigation"
import ItemBlock from "@/app/categories/components/itemBlock"
import { ITrowData } from "@/types/global"
import Loading from "../../loading"
import Share from "../../components/share"

export default function BossCardPage() {

    const [data , setData] = useState<{data: ITrowData}>()
    const { id } = useParams()
    const router = usePathname()
    const categor = router.split('/')[2]

    useEffect(() => {
        axios.get(`https://eldenring.fanapis.com/api/${categor}/${id}`)
        .then(response => setData(response.data))
    }, [])

    return (
        <section>
            <div className="max-w-[1400px] m-auto py-36 px-10">
                <Share />
                {data ? (
                    <ItemBlock {...data?.data} />
                ) : (
                    <Loading />
                )}
            </div>
        </section>
    )
}