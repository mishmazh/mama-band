import classes from "./HomePage.module.scss";
import { bg_home } from 'shared/lib/imagesImport';
import FullHeight from "shared/components/FullHeight/FullHeight";
import Image from "shared/components/Image/Image";

const HomePage = () => {
    return (
        <FullHeight>
            <Image src={bg_home} alt="home-page" />
            <div className={classes.footer}>
                <div className={classes.title}>М.А.М.А.</div>
                <div className={classes.subTitle}>the band</div>
            </div>
        </FullHeight>
    );
}

export default HomePage;
