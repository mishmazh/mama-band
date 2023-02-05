import { useEffect, useRef, useState } from 'react';
import classes from './LazyImage.module.scss';
import { classNames } from '../../helpers/classNames';

const LazyImage = ({ src, alt }) => {
    const [isLoading, setLoading] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.onload = () => setLoading(true);
        }
    }, []);

    return (
        <div className={classNames(classes.lazyImage, { [classes.lazyImageLoaded]: isLoading })}>
            <img
                className={classNames(classes.image, {
                    [classes.imageLoaded]: isLoading,
                })}
                ref={imageRef}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default LazyImage;
