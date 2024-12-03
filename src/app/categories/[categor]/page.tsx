import TData from "@/app/categories/components/tData"
import { ITrowData } from "@/types/global"
import axios from "axios"

export default async function categoriePage({params}: {params: {categor: string}}) {

    const categories = params.categor
    const { data } = (await axios.get(`https://eldenring.fanapis.com/api/${categories}?limit=510`)).data

    return (
        <section className="py-36">
            <div className="max-w-[1400px] m-auto">
                <table className="border-separate border-spacing-x-8 border-spacing-y-3">
                    <thead className="border-b-2 border-b-white">
                        <tr>
                            <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Image</th>
                            <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Name</th>
                            {data[0].location ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Region</th>
                            ) : (
                                null
                            )}
                            {data[0].location ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Location</th>
                            ) : (
                                null
                            )}
                            {data[0].healthPoints ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Hp</th>
                            ) : (
                                null
                            )}
                            {data[0].effect ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Effect</th>
                            ) : (
                                null
                            )}
                            {data[0].type ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Type</th>
                            ) : (
                                null
                            )}
                            {data[0].weight ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Weight</th>
                            ) : (
                                null
                            )}
                            {data[0].category ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Category</th>
                            ) : (
                                null
                            )}
                            {data[0].type ? (
                                <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">Type</th>
                            ) : (
                                null
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: ITrowData) => (
                            <TData {...item} categorieName={categories} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}