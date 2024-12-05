import Image from "next/image";
import Malenia from '../../../public/images/maleniaBg.png'

export default function Errors({ desc, butTitle, event }: { desc: string, butTitle: string, event: () => void }) {
    return (
        <section>
            <div className="py-36 capitalize">
                <div className="w-full m-auto min-[825px]:w-1/2">
                    <Image src={Malenia} alt="malenia image" />
                    <div className="flex items-center pl-2 pt-2 text-xl">
                        <h1>{desc}</h1>
                        <button onClick={event} className="pl-3 underline underline-offset-4 text-[#cbaa6a]">{butTitle}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}