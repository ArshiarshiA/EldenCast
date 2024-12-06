import TData from "@/app/categories/components/tData"
import { ITrowData } from "@/types/global"
import axios from "axios"
import CheckCateInHead from "../components/checkCateInHead"

export default async function categoriePage({params}: {params: {categor: string}}) {

    const categories = params.categor
    const { data } = (await axios.get(`https://eldenring.fanapis.com/api/${categories}?limit=510`)).data
    const secData = data[0]
    const tHeades = [
        {
            type: secData.region,
            text: 'Region'
        },
        {
            type: secData.location,
            text: 'Location'
        },
        {
            type: secData.healthPoints,
            text: 'Hp'
        },
        {
            type: secData.effect,
            text: 'Effect'
        },
        {
            type: secData.type,
            text: 'Type'
        },
        {
            type: secData.weight,
            text: 'Weight'
        },
        {
            type: secData.category,
            text: 'Category'
        },
        {
            type: secData.role,
            text: 'Role'
        },
        {
            type: secData.affinity,
            text: 'Affinity'
        },
        {
            type: secData.skill,
            text: 'Skill'
        },
    ]

    return (
        <section className="py-36">
            <div className="max-w-[1400px] m-auto">
                <table className="border-separate border-spacing-x-8 border-spacing-y-3 m-auto">
                    <thead className="border-b-2 border-b-white">
                        <tr className="max-[960px]:flex flex-col">
                            <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Image</th>
                            <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Name</th>
                            {tHeades.map(tHead => <CheckCateInHead key={tHead.text} type={tHead.type} text={tHead.text} />)}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: ITrowData) => (
                            <TData key={item.id} {...item} categorieName={categories} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}