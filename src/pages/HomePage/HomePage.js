import classes from './HomePage.module.scss';
import { bg_home, bg_home_mobile } from 'shared/lib/imagesImport';
import Image from 'shared/components/Image/Image';

const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <Image src={bg_home} alt="home-page" />
            <Image
                src={bg_home_mobile}
                className={classes.mobileHidden}
                alt="home-page-mobile"
                isAbsolute
            />
            <div className={classes.footer}>
                <div className={classes.title}>М.А.М.А.</div>
                <div className={classes.subTitle}>the band</div>
            </div>
        </div>
    );
};

export default HomePage;
