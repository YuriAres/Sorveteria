import style from './Header.module.css'

import Logo from '../../../../../public/logo.png'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={style.Header}>
            <div>
                <Image src={Logo} alt="Logo" className={style.Image}/>
                <nav className={style.Nav}>
                    <Link href="/" className={style.Link}>Home</Link>
                    <Link href="/pages/Products" className={style.Link}>Sabores</Link>
                    <Link href="/pages/AboutUS" className={style.Link}>Sobre</Link>
                </nav>
            </div>
        </header>
    );
}