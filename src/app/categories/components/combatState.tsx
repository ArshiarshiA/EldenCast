import Image, { StaticImageData } from "next/image"

interface ICombatStateProp {
    element: any,
    title: string,
    source: StaticImageData
}

interface IItemAttribue{
    name: string,
    amount: string
}

export default function CombatState({ element, source, title }: ICombatStateProp) {
    return (
        element && (
            <div className="pt-7">
                <div className="flex items-center gap-1">
                    <Image src={source} alt="sword image" width={50} height={50} />
                    <h1 className="text-3xl text-[#cbaa6a]">{title}</h1>
                </div>
                <div className="pl-14">
                    {element && element.map((item: IItemAttribue) => (
                        <div key={item.name} className="flex justify-between max-w-[200px] gap-2 mt-2">
                            <div>{item.amount}</div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}