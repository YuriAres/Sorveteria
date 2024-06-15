import image from '../../../../../public/sobre-image.jpg'
import image1 from '../../../../../public/sorveteria.jpg'

import Image from 'next/image'
import style from './Photos.module.css'

export default function PhotoSection() {
    return (
        <section>
            <div className={style.PhotoView}>
                <Image src={image} alt='AboutUs' className={style.Image}/>
                <Image src={image1} alt='AboutUs1' className={style.Image}/>
            </div>
        </section>
    );
}