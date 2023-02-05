import classes from './MenuToggle.module.scss';
import { classNames } from 'shared/helpers/classNames';

const MenuToggle = ({ isOpen, openMenu }) => {
    return (
        <div
            className={classNames(classes.menuToggle, { [classes.open]: isOpen })}
            onClick={openMenu}
        >
            <span />
        </div>
    );
};

export default MenuToggle;
