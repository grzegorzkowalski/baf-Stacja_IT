import { useEffect, useState } from "react";
import Loader from "../common/Loader";
import style from "./ArticleList.module.css";
import { Image1, Image2, Image3, Image4, Image5, Image6, ArrowLeft, ArrowRight }  from "..";
import { Base64 } from 'js-base64';

const ArticleList = () => {

    const [imgArray, setImgArray] = useState([]);

    useEffect( () => {
        const timeout = setTimeout(() => {
            setImgArray([Image1, Image2, Image3, Image4, Image5, Image6]);
            return clearTimeout(timeout);
        }, 1000);
    },[])
 
    return ( 
        <section className={style.article_list__container}>
            <div className={style.article_list__article_box}>
                {
                    imgArray.length === 0 
                    ? <Loader />
                    : imgArray.map((item, id) => {
                        return(
                            <div key={id} className={style.article_list__article}>
                                <div className={style.img_wrap}>
                                    <a href={`/csfr/${Base64.encodeURI(item)}`}><img src={item} alt="zdjęcie krajobrazu" key={id} className={style.article_list__article_img}/></a>
                                </div>
                                <div className={style.article_list__article_text}>                                    
                                    <p>
                                        Hi. I'm Grzegorz Kowalski. 
                                        <br/>Welcome to LAOS!
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                imgArray.length > 0 &&
                <div className={style.article_list__pagination}>
                    <button>
                        <img src={ArrowLeft} alt="arrow" />
                    </button>
                    <button>
                        <img src={ArrowRight} alt="arrow" />
                    </button>
                </div>
            }
        </section>
    );
}
 
export default ArticleList;