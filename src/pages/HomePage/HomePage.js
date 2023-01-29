import LazyImage from '../../components/UI/LazyImage/LazyImage';
import { home } from '../../helpers/images-import';

const HomePage = () => {
    return (
        <div className="home">
            <LazyImage src={home} alt="home-page" />
            <div className="home-bottom">
                <div className="home-bottom__title">М.А.М.А.</div>
                <div className="home-bottom__subtitle">the band</div>
            </div>
        </div>
    );
}

export default HomePage;
