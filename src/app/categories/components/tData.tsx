import Image from "next/image";
import Link from "next/link";
import { ITrowData } from "@/types/global";
import CheckCateInBody from "./checkCateInBody";

export default function TData({ id, image, name, healthPoints, region, location, effect, type, categorieName, weight, category, role, affinity, skill }: ITrowData) {

    const elements = [
        { element: region },
        { element: location },
        { element: healthPoints },
        { element: effect },
        { element: type },
        { element: weight },
        { element: category },
        { element: role },
        { element: affinity },
        { element: skill }
    ]

    return (
        <tr className="hover:scale-105 transition-all duration-300 max-[960px]:py-5 max-[960px]:border-b border-b-[#575757] max-[960px]:flex flex-col max-[960px]:text-center">
            <td>
                <Link href={`/categories/${categorieName}/${id}`}>
                    {image ? (
                        <Image className="rounded-md max-[960px]:w-fit m-auto" src={image} alt="boss image" width={250} height={200} />

                    ) : (
                        <p className="text-center">Not observed</p>
                    )}
                </Link>
            </td>
            <td>
                <Link href={`/bosses/${id}`}>
                    <h1>{name}</h1>
                </Link>
            </td>
            {elements.map(item => <CheckCateInBody key={role} type={item.element} />)}
        </tr>
    )
}