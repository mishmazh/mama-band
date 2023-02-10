import cls from './MenuToggle.module.scss';
import { classNames } from 'shared/helpers/classNames';

const MenuToggle = ({ isOpen, openMenu }) => {
    return (
        <div
            className={classNames(cls.menuToggle, { [cls.open]: isOpen })}
            onClick={openMenu}
        >
            <span />
        </div>
    );
};

export default MenuToggle;
