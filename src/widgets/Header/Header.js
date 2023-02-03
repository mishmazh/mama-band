import classes from './Header.module.scss';
import MyLink from 'shared/components/MyLink';
import Container from 'shared/components/Container/Container';
import { navLinks } from 'shared/lib/dataStorage';

const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <nav>
                    <ul>
                        {navLinks.map(({ to, text }, key) => {
                            return <MyLink to={to} key={key}>{text}</MyLink>;
                        })}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
