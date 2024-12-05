import Link from "next/link";
import IntroVideo from "./introVideo";

export default function Intro() {
    return (
        <section>
            <div className="relative">
                <div>
                    <IntroVideo />
                </div>
                <div className="absolute top-0 w-full h-full bg-[#1b1b1bd1] px-5">
                    <div className="h-full flex items-center text-white pb-36 max-w-[1400px] m-auto">
                        <div>
                            <h1 className="text-5xl min-[762px]:text-8xl">Foul Tarnished...</h1>
                            <p className="text-2xl">The beginning of an adventure to find the Elden Ring</p>
                            <p className="text-xl">in the heart of the Lands Between world.</p>
                            <p>This reference will be next to you</p>
                            <p className="mb-4">By An Elden Ring <Link className="underline text-[#cbaa6a]" target="_blank" href={'https://github.com/ArshiarshiA'}>Fan</Link></p>
                            <Link className="border border-black py-1 px-5 rounded-md text-black bg-[#cbaa6a] hover:bg-opacity-0 hover:text-white duration-200 hover:border-white" href={'/'}>
                                Let`s Start
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}