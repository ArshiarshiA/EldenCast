import Image, { StaticImageData } from "next/image"

interface ICheckDropsProps{
    source: StaticImageData
    padding: boolean
    loopElement: string
}

export default function CheckDrops({padding , source, loopElement}: ICheckDropsProps) {
    return (
        <div key={loopElement} className={`flex items-center gap-1 ${padding ? 'pt-2' : null}`}>
            <Image src={source} alt="rune image" width={50} height={50} />
            <h1>{loopElement}</h1>
        </div>
    )
}