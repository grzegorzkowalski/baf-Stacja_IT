import style from "./AboutMe.module.css";
import { Logo, Person2 } from "..";

const AboutMe = () => {
    return (
        <section id="aboutMe" className={style.about_me__container}>
            <img src={Logo} alt="logo" />
            <img src={Person2} alt="logo"/>
            <h3 className={style.about_me__title}>
                Grzegorz <span>kowalski</span>
            </h3>
            <h2>
                hi!
            </h2>
            <p className={style.about_me__text}>
                Besides being one of my all-time favorite people in the world, Jodi is
                also a damn amazing blogger who writes often about food and culture.
                She devotes a lot of time to food on the road, taking mouthwatering photos
                that make me jealous of her ability to do so. A former lawyer, she also
                writes a series called “Thrillable Hours” about other lawyers who gave up
                being a corporate lackey for life on the road. Besides being one of my all-tiut
                other lawyers who gave up being a corporate lackey for life on the road...
            </p>
            <p className={style.about_me__text}>
                so. A former lawyer, she also writes a series called “Thrillable Hours” a
                bout other lawyers who gave up being a corporate lackey for life on the road.
                Besides being one of my all-tiut other lawyers who gave up being a corporate
                lackey for life on the road...so. A former lawyer, she also writes a series called
                “Thrillable Hours” about other lawyers who gave up being a corporate lackey for life
                on the road. Besides being one of my all-tiut other lawyers who gave up being
                a corporate lackey for life on the road...
            </p>
            <p className={style.about_me__text}>
                Grzegorz
            </p>
        </section>
    );
}

export default AboutMe;