import Image from "next/image";
import Rune from '../../../../public/images/rune.png'
import Items from '../../../../public/images/items.png'
import Sword from '../../../../public/images/sword.png'
import Shield from '../../../../public/images/shield.png'
import { ITrowData } from "@/types/global";
import CheckCateIsExist from "./checkIsExist";

export default function ItemBlock({ healthPoints, image = '/images/noImage.png', name, description, location, region, drops, quote, role, weight, category, attack, defence, effect, hpCost, fpCost, affinity, skill }: ITrowData) {

    const contentSec = [
        {
            element: location,
            text: 'Location',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>)
        },
        {
            element: region,
            text: 'Region',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>)
        },
        {
            element: role,
            text: 'Role',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>)
        },
        {
            element: quote,
            text: 'Quote',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 min-w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>)
        },
        {
            element: category,
            text: 'Category',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>)
        },
        {
            element: weight,
            text: 'Weight',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>)
        },
        {
            element: effect,
            text: 'Effect',
            children: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
            </svg>)
        },
        {
            element: hpCost,
            text: 'HP Cost'
        },
        {
            element: fpCost,
            text: 'FP Cost'
        },
        {
            element: affinity,
            text: 'Affinity'
        },
        {
            element: skill,
            text: 'Skill'
        },
    ]

    return (
        <div className="gap-2 min-[1000px]:flex">
            <div className="w-full">
                {healthPoints && (
                    <span className="text-sm">{healthPoints} Hp</span>
                )}
                <Image className="rounded-md" src={image} alt="image" width={400} height={350} />
                <h1 className="text-2xl pt-2 text-[#cbaa6a]">{name}</h1>
                {description && <p className="text-xl py-2">Description : {description}</p>}
                {contentSec.map(content => (
                    <CheckCateIsExist key={content.text} element={content.element} text={content.text}>
                        {content.children}
                    </CheckCateIsExist>
                ))}
            </div>
            <div className="w-full pt-4">
                {drops && (
                    <div>
                        <h1 className="text-3xl">Item you might get..!</h1>
                        <div>
                            {drops && drops.map((item: string) => (
                                item.includes('Runes') ? (
                                    <div key={item} className="flex items-center gap-1">
                                        <Image src={Rune} alt="rune image" width={50} height={50} />
                                        <h1 className="text-white">{item}</h1>
                                    </div>
                                ) : (
                                    <div key={item} className="flex items-center gap-1 pt-2">
                                        <Image src={Items} alt="rune image" width={50} height={50} />
                                        <h1>{item}</h1>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )}
                {attack && (
                    <div>
                        <div className="flex items-center gap-1">
                            <Image src={Sword} alt="sword image" width={50} height={50} />
                            <h1 className="text-3xl text-[#cbaa6a]">Attack Power</h1>
                        </div>
                        <div className="pl-14">
                            {attack && attack.map(item => (
                                <div key={item.name} className="flex justify-between max-w-[200px] gap-2 mt-2">
                                    <div>{item.amount}</div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {defence && (
                    <div className="pt-7">
                        <div className="flex items-center gap-1">
                            <Image src={Shield} alt="sword image" width={50} height={50} />
                            <h1 className="text-3xl text-[#cbaa6a]">Guarded Damage Negation</h1>
                        </div>
                        <div className="pl-14">
                            {defence && defence.map(item => (
                                <div key={item.name} className="flex justify-between max-w-[200px] gap-2 mt-2">
                                    <div>{item.amount}</div>
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}