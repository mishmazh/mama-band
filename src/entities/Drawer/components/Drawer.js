import cls from './Drawer.module.scss';
import AppLink from 'shared/components/AppLink';
import { classNames } from 'shared/helpers/classNames';

const Drawer = ({ isOpen, closeMenu, navLinks }) => {
    return (
        <div className={classNames(cls.drawer, { [cls.open]: isOpen })}>
            <nav className={cls.body}>
                {navLinks.map(({ to, text }, key) => {
                    return <AppLink to={to} onClick={closeMenu} key={key}>{text}</AppLink>;
                })}
            </nav>
        </div>
    );
};

export default Drawer;
