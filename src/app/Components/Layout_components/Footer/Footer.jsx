import Image from 'next/image';
import Logo from '../../../../../public/logo.png';

import style from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={style.Footer}>
            <div className={style.ContactView}>
                <Image src={Logo} alt='Logo' className={style.Image}/>
                <div>
                    <h6>ENDEREÇO</h6>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h6>CONTATO</h6>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h6>HORÁRIOS</h6>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={style.Copyright}>
                <p>Gelateria. Orgulhosamente desenvolvido por Yuri Borges</p>
            </div>
        </footer>
    );
}