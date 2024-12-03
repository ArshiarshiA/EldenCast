import Image from "next/image";
import Link from "next/link";
import { ITrowData } from "@/types/global";

export default function TData({ id, image, name, healthPoints, region, location, effect, type, categorieName, weight, category }: ITrowData) {
    return (
        <tr>
            <td>
                <Link href={`/categories/${categorieName}/${id}`}>
                    {image ? (
                        <Image className="rounded-md" src={image} alt="boss image" width={250} height={200} />

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
            {region && <td>{region}</td>}
            {location && <td>{location}</td>}
            {healthPoints && <td>{healthPoints}</td>}
            {effect && <td>{effect}</td>}
            {type && <td>{type}</td>}
            {weight && <td>{weight}</td>}
            {category && <td>{category}</td>}
        </tr>
    )
}