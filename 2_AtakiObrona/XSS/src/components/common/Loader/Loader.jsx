import style from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={style.loading_container}>
            <h2>Loading</h2>
            <div className={style.loading}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
 
export default Loader;