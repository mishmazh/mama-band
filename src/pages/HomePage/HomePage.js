import LazyImage from '../../shared/components/LazyImage/LazyImage';
import { home } from '../../shared/images-import';
import FullHeight from "../../shared/components/FullHeight/FullHeight";
import classes from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <FullHeight>
            <LazyImage src={home} alt="home-page" />
            <div className={classes.footer}>
                <div className={classes.title}>М.А.М.А.</div>
                <div>the band</div>
            </div>
        </FullHeight>
    );
}

export default HomePage;
