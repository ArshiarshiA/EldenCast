import Image from "next/image"
import Link from "next/link"
import Margit from '../../../../public/images/Margit.png'
import Sword from '../../../../public/images/sword.png'
import RandomBosses from "../allBosses/randomBosses"

export default function AllBosses() {
    return (
        <section>
            <div className="max-w-[1200px] m-auto py-28 px-10">
                <div className="flex flex-col-reverse justify-between items-center min-[1015px]:flex-row">
                    <div className="capitalize pt-10 min-[1015px]:pt-20 text-center">
                        <h1 className="text-5xl">ALL BOSSES</h1>
                        <p className="pb-3">you can find all of Lands Between world boss at here</p>
                        <Link
                            className="border border-black py-1 px-5 rounded-md text-black bg-[#cbaa6a] hover:bg-opacity-0 hover:text-white duration-200 hover:border-white"
                            href={'/categories/bosses'}
                        >
                            Bosses
                        </Link>
                        <p className="pt-3 pb-14">you can see some random boss at there</p>
                        <Image width={200} className="-rotate-45 m-auto" src={Sword} alt="sword" />
                    </div>
                    <div className="text-center">
                        <Image width={500} src={Margit} alt="logo" />
                        <span className="text-gray-400">Margit, the Fell Omen, the first boss in the game</span>
                    </div>
                </div>
            </div>
            <RandomBosses />
        </section>
    )
}