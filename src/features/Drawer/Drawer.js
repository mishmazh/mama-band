import classes from './Drawer.module.scss';
import { navLinks } from 'shared/lib/navLinks';
import MyLink from 'shared/components/MyLink';
import { classNames } from '../../shared/lib/classNames';

const Drawer = ({ isOpen, closeMenu }) => {
    return (
        <div className={classNames(classes.drawer, { [classes.open]: isOpen })}>
            <nav>
                <ul>
                    {navLinks.map(({ to, text }, key) => {
                        return <MyLink to={to} onClick={closeMenu} key={key}>{text}</MyLink>;
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Drawer;
