import cls from './GalleryPage.module.scss';
import {
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
} from 'shared/lib/imagesImport';
import Container from 'shared/ui/Container/Container';
import Image from 'shared/ui/Image/Image';

const GalleryPage = () => {
    return (
        <div className={cls.galleryPage}>
            <div className={cls.body}>
                <Container>
                    <div className={cls.grid}>
                        <div className={cls.item1}>
                            <Image src={gallery_1} alt="gallery-1" />
                        </div>
                        <div className={cls.item2}>
                            <img src={gallery_2} alt="gallery-2" />
                        </div>
                        <div className={cls.item3}>
                            <img src={gallery_3} alt="gallery-3" />
                        </div>
                        <div className={cls.item4}>
                            <img src={gallery_4} alt="gallery-4" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default GalleryPage;
