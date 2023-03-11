import cls from './Text.module.scss';
import { classNames } from '../../lib/classNames';

export const Text = (props) => {
    const {
        className,
        title,
        text,
    } = props;

    return (
        <div className={classNames(cls.text, {}, [className])}>
            {title && <h2 className={cls.title}>{title}</h2>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
};
