import style from "./FirstArticle.module.css";
import { ArticlePhoto } from "..";

const FirstArticle = () => {
    return (
        <article id="firstArticle" className={style.first_article__container}>
            <div className={style.first_article__box}>
                <img src={ArticlePhoto} alt="bay" className={style.first_article__img}/>
                <div>
                    <p className={style.first_article__text_date}>01.02.2019</p>
                    <h3 className={style.first_article__text_title}>Welcome to LAOS!</h3>
                    <p className={style.first_article__text_content}>
                        Besides being one of my all-time favorite people in the
                        world, Jodi is also a damn amazing blogger who writes often about food and culture. She
                        devotes a lot of time to food on the road, taking mouthwatering photos that make me jealous
                        of her ability to do so. A former lawyer, she also writes a series called “Thrillable Hours”
                        about other lawyers who gave up being a corporate lackey for life on the road. Besides being
                        one of my all-tiut other lawyers who gave up being a corporate lackey for life on the road...
                    </p>
                </div>
            </div>
            <a href="#" >
                <button className={style.back_to_top_btn}></button>
            </a>
        </article>
    );
}
 
export default FirstArticle;