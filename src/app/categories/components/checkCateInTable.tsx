export default function CheckCateInTable({ type, text }: { type: any, text: string }) {
    return (
        type ? (
            <th className="text-left border-b-2 border-b-[#606060] text-[#cbaa6a]">{text}</th>
        ) : (
            null
        )

    )
}