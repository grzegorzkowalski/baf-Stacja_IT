import style from "./HeaderSection.module.css";
import { LogoWhite, Person1 } from "..";

const HeaderSection = () => {
    return (
        <section className={`${style.header_section__container}`}>
            <header className={style.header_section__header}>
                <h1>
                    Life is a journey, stories are our mile markers
                </h1>
                <img src={LogoWhite} alt="adventurer logo"/>
            </header>
            <div className={style.header_section__intro}>
                <img src={Person1} alt="Grzegorz Kowalski"  />
                <div>
                    <h2>
                        Hi. I’m Grzegorz Kowalski.<br/> Welcome to LAOS!
                    </h2>
                    <p>
                        Besides being one of my all-time favorite people in the world,
                        Jodi is also a damn amazing blogger who writes often about food
                        and culture. She devotes a lot of time to food on the road, taking
                        mouthwatering photos that make me jealous of her ability to do so.
                        A former lawyer, she also writes a series called “Thrillable Hours”
                        about other lawyers who gave up being a corporate lackey for life on the road.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeaderSection;