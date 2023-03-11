import cls from './MenuToggle.module.scss';
import { classNames } from 'shared/lib/classNames';

const MenuToggle = ({ isOpen, openMenu }) => {
    return (
        <div
            className={classNames(cls.menuToggle, { [cls.opened]: isOpen })}
            onClick={openMenu}
        >
            <span />
        </div>
    );
};

export default MenuToggle;
