import {
    Navigation,
    HeaderSection,
    FirstArticle,
    ArticleList,
    PromoArticle,
    AboutMe,
    Gallery,
    Contact
} from '../components';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeaderSection />
            <FirstArticle />
            <ArticleList />
            <PromoArticle />
            <AboutMe />
            <Gallery />
            <Contact />
        </>
    );
}
export default Home;