import cls from './PageLoader.module.scss';
import  Loader from 'shared/components/Loader/Loader';
import { classNames } from 'shared/helpers/classNames';

const PageLoader = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
