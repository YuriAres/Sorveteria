import Image from 'next/image'
import photo from '../../../../../public/banner-sabores.jpg'
import photo1 from '../../../../../public/eventos-image.jpg'
import photo2 from '../../../../../public/sobre-image.jpg'

import style from './Info_section.module.css'

export default function InfoSection() {
    return (
        <section className={style.InfoSection}>
            <div className={style.Card}>
                <Image src={photo} alt='sabores' className={style.Image}/>
                <div className={style.TextCard}>
                    <h2>NOSSOS SABORES</h2>
                    <div className={style.Text}>
                        <h3>Novos e deliciosos!</h3>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, 
                            à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. 
                            Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.CardReverse}>
                <Image src={photo1} alt='evento' className={style.Image}/>
                <div className={style.TextCard}>
                    <h2>NOSSOS EVENTOS</h2>
                    <div className={style.Text}>
                        <h3>Delicias com sorvete!</h3>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! 
                            Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! 
                            Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.Card}>
                <Image src={photo2} alt='sabores' className={style.Image}/>
                <div className={style.TextCard}>
                    <h2>SOBRE NÓS</h2>
                    <div className={style.Text}>
                        <h3>Alegria em cada casquinha!</h3>
                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! 
                            Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. 
                            Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}