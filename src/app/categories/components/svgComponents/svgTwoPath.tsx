interface ISvgProp {
    d: string
    dTwo: string
}

export default function SvgOnePath({ d , dTwo }: ISvgProp) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 min-w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={`${d}`} />
            <path strokeLinecap="round" strokeLinejoin="round" d={`${dTwo}`} />
        </svg>
    )
}