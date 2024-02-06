import style from "./PromoArticle.module.css";

const PromoArticle = () => {
    return (
        <section className={style.promo_article__container}>
            <article className={style.promo_article__box}>
                <p className={style.promo_article__inner_title}>***</p>
                <p className={style.promo_article__date}>01.02.2019</p>
                <h2 className={style.promo_article__title}>
                    Wai o Tapu – gejzery – geotermalny cud Nowej Zelandii
                </h2>
                <div className={style.promo_article__img}/>
                <p className={style.promo_article__text}>
                    Podróż na Seszele zawsze była moim marzeniem. Gdy przyszło do organizacji
                    wyprawy nie mogłam uwierzyć, że to się dzieje naprawdę! Wyprawę
                    rozpoczęliśmy od wyspy Praslin. Pokażę Wam dzisiaj jak my zorganizowaliśmy
                    swoją objazdówkę, jakie miejsca najbardziej nas urzekły oraz gdzie wybrać
                    się na pyszny obiad! Lecimy!
                </p>
                <h3 className={style.promo_article__inner_title}> JAK DOSTAĆ SIĘ NA WYSPĘ PRASLIN?</h3>
                <p className={style.promo_article__text}>
                    Pierwsze pytanie, jakie pojawi się przy planowaniu podróży to jak dostać się po
                    przylocie na wyspę Praslin. Jest na to kilka sposobów: możecie popłynąć promem
                    CAT COCOS , polecieć samolotem. liniami AIR SEYCHELLES, a nawet helikopterem
                    FLY ZIL AIR. Koszt przelotu samolotem lokalnych linii lotniczych w tym roku
                    to około 250 pln w jedną stronę (w cenie biletu jest 30-kg bagaż), a cena rejsu
                    statkiem to około 220 pln (dzieci w wieku od 2 do 12 lat płacą 50% ceny). Promy
                    wypływają trzy razy dziennie, rejs trwa około godzinę. Samoloty kursują częściej,
                    sześć razy dziennie, a lot trwa 20 minut.
                </p>
            </article>
        </section>
    );
}
 
export default PromoArticle;