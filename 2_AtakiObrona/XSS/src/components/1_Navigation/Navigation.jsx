import { useState } from 'react';

import style from "./Navigation.module.css";
import { Logo, Dot } from '..';

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`${style.navigation_container}`}>
            <header className={`${style.navigation_header}`}>
                <img src={Logo} alt='logo'/>
                <button 
                    onClick={() => setToggle(!toggle)} 
                    className={`${style.hamburger_btn} ${toggle ? style.active : ''}`}
                >
                    <div>
                        <span />
                    </div>
                </button>
                <ul className={`${style.navigation_box} ${toggle ? style.expanded : ''}`}>
                    <li><img src={Dot} alt='dot'/></li>
                    <li><a href='#firstArticle' onClick={() => setToggle(false)}>Aktualności</a></li>
                    <li><img src={Dot} alt='dot'/></li>
                    <li><a href='#aboutMe' onClick={() => setToggle(false)}>O mnie</a></li>
                    <li><img src={Dot} alt='dot'/></li>
                    <li><a href='#gallery' onClick={() => setToggle(false)}>Galeria</a></li>
                    <li><img src={Dot} alt='dot'/></li>
                    <li><a href='#contact' onClick={() => setToggle(false)}>Kontakt</a></li>
                    <li><img src={Dot} alt='dot'/></li>
                </ul>
            </header>
        </nav>
    );
}
 
export default Navigation;