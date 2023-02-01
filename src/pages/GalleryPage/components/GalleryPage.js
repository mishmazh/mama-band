import classes from './GalleryPage.module.scss';
import {
    bg_gallery,
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
} from 'shared/lib/imagesImport';
import Container from 'shared/components/Container/Container';
import Image from 'shared/components/Image/Image';
import HeaderTitle from "widgets/HeaderTitle/HeaderTitle";

const GalleryPage = () => {
    return (
        <div className={classes.center}>
            <Image src={bg_gallery} alt="live-page" />
            <HeaderTitle>Галерея</HeaderTitle>
            <div className={classes.body}>
                <Container>
                    <div className={classes.grid}>
                        <div className={classes.item1}>
                            <Image src={gallery_1} alt="gallery-1" />
                        </div>
                        <div className={classes.item2}>
                            <img src={gallery_2} alt="gallery-2" />
                        </div>
                        <div className={classes.item3}>
                            <img src={gallery_3} alt="gallery-3" />
                        </div>
                        <div className={classes.item4}>
                            <img src={gallery_4} alt="gallery-4" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default GalleryPage;
