import style from "./Contact.module.css";
import { Mail, Facebook, Twitter, Google } from "..";

const Contact = () => {
    return (
        <footer id="contact" className={style.contact__container}>
            <form action="#" className={style.contact__form}>
                <div className={style.contact__form_input}>
                    <input name="name" type="text" placeholder="Imię i nazwisko" />
                </div>
                <div className={style.contact__form_input}>
                    <input name="email" type="text" placeholder="E-mail" />
                </div>
                <div className={style.contact__form_textarea}>
                    <textarea name="message" type="text" placeholder="Wiadomość" ></textarea>
                </div>
                <div className={style.contact__form_submit}>wyślij</div>
            </form>
            <div className={style.contact__social_media}>
                <a href="mailto:grzegorz@theadventurerblog.pl">
                    <img src={Mail} alt="mail icon" />
                </a>
                <a href="#">
                    <img src={Facebook} alt="facebook icon" />
                </a>
                <a href="#">
                    <img src={Twitter} alt="twitter icon" />
                </a>
                <a href="#">
                    <img src={Google} alt="google plus icon" />
                </a>
            </div>
        </footer>
    );
}
 
export default Contact;