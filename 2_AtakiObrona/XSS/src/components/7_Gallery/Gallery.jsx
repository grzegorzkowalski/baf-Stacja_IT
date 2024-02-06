import { useState } from "react";
import Loader from "../common/Loader";

import style from "./Gallery.module.css";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, GalleryIcons } from "..";

const Gallery = () => {

    const [galleryArray, setGalleryArray] = useState([]);

    const timeout = setTimeout(() => {
        setGalleryArray([Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6])
        return clearTimeout(timeout);
    }, 6000)

    return (
        <section id="gallery" className={style.gallery__container}>
            {
                galleryArray.length < 1
                ? <Loader />
                : galleryArray.map((item, id) => {
                    return(
                        <div key={id} className={style.gallery__box}>
                            <img src={item} alt="image" className={style.gallery__img} />
                            <p className={style.gallery__img_text}>laos!</p>
                            <div className={style.gallery__img_cover}>
                                <img src={GalleryIcons} alt="gallery icon" />
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
}

export default Gallery;