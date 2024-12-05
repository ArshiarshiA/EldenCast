'use client'
export default function Menu({elemnet}: {elemnet: HTMLDivElement | null}) {
    
    const opneMenuHandler = () => { if (elemnet) elemnet.style.maxWidth = '600px' }

    return (
        <svg onClick={opneMenuHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer min-[990px]:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}