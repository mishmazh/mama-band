import classes from './Image.module.scss';
import clsx from 'clsx';

const Image = ({ src, alt, isAbsolute = false }) => {
    return (
        <img
            className={clsx(classes.image, { [classes.absolute]: isAbsolute })}
            src={src}
            alt={alt}
        />
    );
};

export default Image;
