import classes from './Header.module.scss';
import Container from 'shared/components/Container/Container';
import Navbar from 'shared/components/Navbar/Navbar';
import MobileNavigation from '../MobileNavigation';

const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <Navbar />
                <MobileNavigation />
            </Container>
        </header>
    );
};

export default Header;
