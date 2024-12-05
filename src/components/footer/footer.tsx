'use client'
import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import Link from "next/link";

export default function Footer() {

    const references = [
        { to: '/categories/bosses', title: 'Bosses' },
        { to: '/categories/items', title: 'Items' },
        { to: '/categories/npcs', title: 'NPCs' },
        { to: '/categories/weapons', title: 'Weapons' },
        { to: '/categories/armors', title: 'Armors' },
        { to: '/categories/classes', title: 'Classes' },
        { to: '/categories/shields', title: 'Shields' },
        { to: '/categories/spirits', title: 'Spirits' },
        { to: '/categories/talismans', title: 'Talismans' },
    ]

    const goUpHandler = () => {
        scrollTo({top: 0,behavior:"smooth"})
    }

    return (
        <footer>
            <div className="max-w-[1400px] m-auto pt-10 text-white px-5">
                <div className="border-y py-20 min-[1130px]:flex">
                    <div className="min-[1130px]:w-4/12 w-full">
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <Image src={Logo} width={300} alt="logo" />
                                </Link>
                            </li>
                            <li><p className="text-xl pt-4">an reference for elden ring</p></li>
                            <li><p className="pt-5">Developer : <Link className="text-[#cbaa6a]" target="_blank" href={'https://github.com/ArshiarshiA'}>Arshia Mansury</Link></p></li>
                            <li onClick={goUpHandler} className="bg-[#cbaa6a] rounded-full w-fit p-2 text-black my-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className="min-[1130px]:w-4/12 w-full pt-2">
                        <ul className="flex flex-col gap-3">
                            <li><h1 className="text-5xl border-l pl-2 border-[#cbaa6a]">References</h1></li>
                            {references.map(refBlock => (
                                <li key={refBlock.title}><Link className="hover:text-[#cbaa6a] duration-200 delay-100" href={refBlock.to}>{refBlock.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="min-[1130px]:w-4/12 w-full pt-2">
                        <ul className="flex flex-col gap-3">
                            <li><h1 className="text-5xl border-l pl-2 border-[#cbaa6a]">Quick Links</h1></li>
                            <li><Link href={'/'}>Faq</Link></li>
                            <li><Link href={'/'}>Terms</Link></li>
                            <li><Link href={'/about'}>About Me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center py-5">
                    <p>All right reserved-2024</p>
                </div>
            </div>
        </footer>
    )
}