import classes from './Image.module.scss';
import { classNames } from '../../lib/classNames';

const Image = ({ src, alt, isAbsolute = false, className }) => {
    return (
        <img
            className={classNames(classes.image, { [classes.absolute]: isAbsolute }, [className])}
            src={src}
            alt={alt}
        />
    );
};

export default Image;
