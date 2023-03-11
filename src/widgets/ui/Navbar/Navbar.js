import cls from './Navbar.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import Container from 'shared/ui/Container/Container';
import { navLinks } from '../../store';

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <Container>
                <div className={cls.body}>
                    {navLinks.map(({ to, text }, key) => {
                        return <AppLink to={to} key={key}>{text}</AppLink>;
                    })}
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;