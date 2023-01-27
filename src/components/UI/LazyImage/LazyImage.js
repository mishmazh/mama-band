import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const LazyImage = ({ src, alt }) => {
    const [isLoading, setLoading] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.onload = () => setLoading(true);
        }
    }, []);

    return (
        // <div className={`lazy-image ${isLoading ? 'lazy-image-loaded' : ''}`}>
        <div className={'lazy-image ' + clsx({ ['lazy-image-loaded']: isLoading })}>
            <img
                className={'image ' + clsx({ ['image-loaded']: isLoading })}
                ref={imageRef}
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default LazyImage;
