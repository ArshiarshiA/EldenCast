'use client'
import Image from "next/image";
import { useRef, useState } from "react";

export default function AshesBlock({ image, name }: { image: string, name: string }) {

    const [isEnter, setIsEnter] = useState('0')
    const hoverHandler = useRef<HTMLImageElement>(null)
    const hoverItem = useRef<HTMLHeadingElement>(null)

    const mouseEnterHandler = () => { if (hoverItem.current) hoverItem.current.style.maxHeight = hoverItem.current.scrollHeight + "px" }

    const mouseLeaveHandler = () => { if (hoverItem.current) hoverItem.current.style.maxHeight = '0' }

    return (
        <div className="text-center w-fit m-auto transition-all duration-300 ease-in-out">
            <img
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                ref={hoverHandler}
                src={image}
                width={250}
                height={200}
                alt="ashes image"
            />
            <h1 ref={hoverItem} className={`max-h-${isEnter} transition-all duration-300 ease-in-out overflow-hidden hover:max-h-${isEnter}`}>{name}</h1>
        </div>
    )
}