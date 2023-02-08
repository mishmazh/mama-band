import classes from './Navbar.module.scss';
import { navLinks } from '../../helpers/dataStorage';
import MyLink from '../MyLink';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul>
                {navLinks.map(({ to, text }, key) => {
                    return <MyLink to={to} key={key}>{text}</MyLink>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;