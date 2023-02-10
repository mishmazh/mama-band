import './Loader.scss';
import { classNames } from '../../helpers/classNames';

const Loader = ({ className }) => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
