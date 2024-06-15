import Image from 'next/image';

import imageCookies from '../../../../../public/sabor-cookies-avela.png';
import imageOreo from '../../../../../public/sabor-oreo.png';
import imagePistache from '../../../../../public/sabor-pistache.png';
import imageKiwi from '../../../../../public/sabor-kiwi.png';
import imageLimao from '../../../../../public/sabor-limao.png';
import imageMorango from '../../../../../public/sabor-morango.png';

import style from './ProductSection.module.css'

export default function ProductSection() {
    return (
        <section>
            <div className={style.InfoBox}>
                <h2>SABORES DE SORVETE</h2>
                <div className={style.ProductView}>
                    <div className={style.ProductCard}>
                        <Image src={imageOreo} alt="Oreo" className={style.Image}/>
                        <div>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <Image src={imagePistache} alt="Pistache" className={style.Image}/>
                        <div>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <Image src={imageCookies} alt="Cookies" className={style.Image}/>
                        <div>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <Image src={imageKiwi} alt="Kiwi" className={style.Image}/>
                        <div>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <Image src={imageMorango} alt="Morango" className={style.Image}/>
                        <div>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                    </div>
                    <div className={style.ProductCard}>
                        <Image src={imageLimao} alt="Limão" className={style.Image}/>
                        <div>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}