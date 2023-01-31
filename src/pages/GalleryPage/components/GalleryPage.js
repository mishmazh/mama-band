import gallery from '../../../app/assets/images/gallery.jpg';
import gallery_1 from '../../../app/assets/images/gallery/gallery_1.jpg';
import gallery_2 from '../../../app/assets/images/gallery/gallery_2.jpg';
import gallery_3 from '../../../app/assets/images/gallery/gallery_3.jpg';
import gallery_4 from '../../../app/assets/images/gallery/gallery_4.jpg';
import classes from './GalleryPage.module.scss';
import LazyImage from '../../../shared/components/LazyImage/LazyImage';
import Container from '../../../shared/components/Container/Container';

const GalleryPage = () => {
    return (
        <div className={classes.center}>
            <LazyImage src={gallery} alt="live-page" />
            <div className={classes.body}>
                <Container>
                    <div className={classes.grid}>
                        <div className={classes.item1}>
                            <img src={gallery_1} alt="" />
                        </div>
                        <div className={classes.item2}>
                            <img src={gallery_2} alt="" />
                        </div>
                        <div className={classes.item3}>
                            <img src={gallery_3} alt="" />
                        </div>
                        <div className={classes.item4}>
                            <img src={gallery_4} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default GalleryPage;
