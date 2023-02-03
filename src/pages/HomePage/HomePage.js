import classes from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={classes.homePage}>
            <div className={classes.footer}>
                <div className={classes.title}>М.А.М.А.</div>
                <div className={classes.subTitle}>the band</div>
            </div>
        </div>
    );
};

export default HomePage;
