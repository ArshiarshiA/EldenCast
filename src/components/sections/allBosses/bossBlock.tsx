'use client'
import { useRef } from "react";

export default function BossBlock({ id, image, name, healthPoints, location }: { id: string, image: string, name: string, healthPoints: string, location: string }) {

    const contain = useRef<HTMLDivElement>(null)
    const desc = useRef<HTMLDivElement>(null)

    const mouseHandler = () => {
        if (desc.current) {
            desc.current.style.maxHeight = desc.current.scrollHeight + "px";
        }
    }

    const mouseLeaveHandler = () => {
        if (desc.current) {
            desc.current.style.maxHeight = "0";
        }
    }

    return (
        <div
            ref={contain}
            onMouseEnter={mouseHandler}
            onMouseLeave={mouseLeaveHandler}
            className="p-5 cursor-pointer"
        >
            <div className="relative">
                {image == null ? (
                    <div className="flex items-center justify-center">
                        <p>Not observed</p>
                    </div>
                ) : (
                    <img className="text-white rounded-md w-full h-[200px]" key={id} src={image} alt="boss image" width={250} height={100} />
                )}
                <div
                    ref={desc}
                    className="absolute bottom-0 bg-[#00000058] w-full max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="p-3">
                        <p>{name}</p>
                        <div className="flex items-center gap-1 text-xs py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                            </svg>
                            {location.split(' ').length > 8 ? (
                                <p>Contains a long address</p>
                            ) : (
                                <p>{location}</p>
                            )}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <p>{healthPoints}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}