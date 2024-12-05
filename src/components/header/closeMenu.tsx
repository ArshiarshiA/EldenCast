'use client'
export default function CloseMenu({ elemnet }: { elemnet: HTMLDivElement | null }) {

    const closeMenu = () => { if (elemnet) elemnet.style.maxWidth = '0' }

    return (
        <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 rotate-45 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    )
}