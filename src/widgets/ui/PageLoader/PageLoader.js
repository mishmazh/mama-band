import cls from './PageLoader.module.scss';
import  Loader from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames';

const PageLoader = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
