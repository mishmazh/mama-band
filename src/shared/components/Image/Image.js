import classes from './Image.module.scss';
import { classNames } from '../../lib/classNames';

const Image = ({ src, alt, isAbsolute = false }) => {
    return (
        <img
            className={classNames(classes.image, { [classes.absolute]: isAbsolute })}
            src={src}
            alt={alt}
        />
    );
};

export default Image;
