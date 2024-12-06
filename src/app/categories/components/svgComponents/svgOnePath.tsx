interface ISvgProp {
    d: string,
    size?: string
}

export default function SvgOnePath({ d, size = '6' }: ISvgProp) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-${size} min-w-${size}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d={`${d}`} />
        </svg>
    )
}