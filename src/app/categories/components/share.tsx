'use client'
import SvgOnePath from "./svgComponents/svgOnePath";
import { usePathname } from "next/navigation";

export default function Share() {
    
    const currnetPath = usePathname()

    const shareHandler = () => {
        navigator.share({title: 'share' , url: currnetPath})
    }

    return (
        <div onClick={shareHandler} className="cursor-pointer w-fit pb-2">
            <SvgOnePath
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                size="8"
            />
        </div>
    )
}