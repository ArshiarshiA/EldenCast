'use client'
import Image from "next/image";
import Logo from '../../../public/images/logo.png'
import BgMusic from "../bgMusic/bgMusic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {

    const header = useRef<HTMLHeadElement>(null)
    const [isY, setIsY] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            if(scrollY >= 240){
                header.current?.classList.remove('py-3')
                header.current?.classList.add('py-10')
                setIsY(true)
            } else {
                header.current?.classList.add('py-3')
                header.current?.classList.remove('py-10')
                setIsY(false)
            }
        })
    } , [])

    const routes = [
        {route: '/', title: 'Home'},
        {route: '/categories/weapons', title: 'Weapons'},
        {route: '/categories/bosses', title: 'Bosses'},
        {route: '/categories/npcs', title: 'NPCs'},
        {route: '/categories/items', title: 'Items'},
        {route: '/about', title: 'About Me'},
    ]


    return (
        <header className="fixed py-3 top-0 left-0 right-0 z-20 duration-500 px-5 backdrop-blur-sm" ref={header}>
            <nav>
                <div className="max-w-[1400px] m-auto flex justify-between items-center">
                    <div>
                        <Link href='/'>
                            <Image src={Logo} width={230} height={80} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <ul className="text-white flex gap-12 text-xl">
                            {routes.map(route => (
                                <li key={route.title} className="hover:text-[#cbaa6a] duration-200 delay-100"><Link href={route.route}>{route.title}</Link></li>
                            ))}
                            <li>
                                <BgMusic />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}