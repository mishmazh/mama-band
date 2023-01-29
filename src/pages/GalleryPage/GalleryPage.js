import gallery from '../../assets/images/gallery.jpg';
import LazyImage from '../../components/UI/LazyImage/LazyImage';
import gallery_1 from '../../assets/images/gallery/gallery_1.jpg';
import gallery_2 from '../../assets/images/gallery/gallery_2.jpg';
import gallery_3 from '../../assets/images/gallery/gallery_3.jpg';
import gallery_4 from '../../assets/images/gallery/gallery_4.jpg';

const GalleryPage = () => {
    return (
        <div className="gallery">
            <LazyImage src={gallery} alt="live-page" />
            <div className="gallery__wrapper">
                <div className="container">
                    <div className="gallery-grid">
                        <div className="gallery-grid__item-1">
                            <img src={gallery_1} alt="" />
                        </div>
                        <div className="gallery-grid__item-2">
                            <img src={gallery_2} alt="" />
                        </div>
                        <div className="gallery-grid__item-3">
                            <img src={gallery_3} alt="" />
                        </div>
                        <div className="gallery-grid__item-4">
                            <img src={gallery_4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
