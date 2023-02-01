import { useEffect, useRef, useState } from 'react';
import classes from './LazyImage.module.scss';
import clsx from 'clsx';
import { classNames } from '../../lib/classNames';

const LazyImage = ({ src, alt }) => {
    const [isLoading, setLoading] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.onload = () => setLoading(true);
        }
    }, []);

    return (
        <div
            className={clsx(classes.lazyImage, {
                [classes.lazyImageLoaded]: isLoading,
            })}
            // className={classNames('lazy-image', { lazyImageLoaded: isLoading })}
        >
            <img
                className={clsx(classes.image, {
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
