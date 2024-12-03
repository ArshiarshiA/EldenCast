import Image from "next/image";
import Rune from '../../../../public/images/rune.png'
import Items from '../../../../public/images/items.png'
import { ITrowData } from "@/types/global";

export default function ItemBlock({ healthPoints, image = '/images/noImage.png', name, description, location, region, drops }: ITrowData) {
    return (
        <div className="flex gap-2">
            <div className="w-5/12">
                {healthPoints && (
                    <span className="text-sm">{healthPoints} Hp</span>
                )}
                <Image className="rounded-md" src={image} alt="image" width={400} height={350} />
                <h1 className="text-2xl pt-2 text-[#cbaa6a]">{name}</h1>
                <p className="text-xl py-2">Description : {description}</p>
                {location && (
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h1>Location : {location}</h1>
                    </div>
                )}
                {region && (
                    <div className="flex gap-2 pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        <h1>Region : {region}</h1>
                    </div>
                )}
            </div>
            <div className="w-7/12">
                {drops && (
                    <>
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
                    </>
                )}
            </div>
        </div>
    )
}