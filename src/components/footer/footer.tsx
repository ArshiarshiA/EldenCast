import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import Link from "next/link";

export default function Footer() {

    const references = [
        { to: '/bosses', title: 'Bosses' },
        { to: '/items', title: 'Items' },
        { to: '/npcs', title: 'NPCs' },
        { to: '/weapons', title: 'Weapons' },
        { to: '/armors', title: 'Armors' },
        { to: '/classes', title: 'Classes' },
        { to: '/shields', title: 'Shields' },
        { to: '/spirits', title: 'Spirits' },
        { to: '/talismans', title: 'Talismans' },
    ]

    return (
        <footer>
            <div className="max-w-[1400px] m-auto pt-10 text-white">
                <div className="flex border-y py-20">
                    <div className="w-4/12">
                        <ul>
                            <li>
                                <Link href={'/'}>
                                    <Image src={Logo} width={300} alt="logo" />
                                </Link>
                            </li>
                            <li><p className="text-xl pt-4">an reference for elden ring</p></li>
                            <li><p className="pt-5">Developer : <Link className="text-[#cbaa6a]" target="_blank" href={'https://github.com/ArshiarshiA'}>Arshia Mansury</Link></p></li>
                        </ul>
                    </div>
                    <div className="w-4/12">
                        <ul className="flex flex-col gap-3">
                            <li><h1 className="text-5xl border-l pl-2 border-[#cbaa6a]">References</h1></li>
                            {references.map(refBlock => (
                                <li key={refBlock.title}><Link className="hover:text-[#cbaa6a] duration-200 delay-100" href={refBlock.to}>{refBlock.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-4/12">
                        <ul className="flex flex-col gap-3">
                            <li><h1 className="text-5xl border-l pl-2 border-[#cbaa6a]">Quick Links</h1></li>
                            <li><Link href={'/'}>Faq</Link></li>
                            <li><Link href={'/'}>Terms</Link></li>
                            <li><Link href={'/'}>About Me</Link></li>
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