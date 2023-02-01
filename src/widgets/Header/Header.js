import classes from "./Header.module.scss";
import MyLink from 'shared/components/MyLink';
import Container from 'shared/components/Container/Container';

const Header = () => {
    return (
        <header className={classes.header}>
            <Container>
                <nav>
                    <ul>
                        <MyLink to="/">Главная</MyLink>
                        <MyLink to="/about">О группе</MyLink>
                        <MyLink to="/members/masha">Участники</MyLink>
                        <MyLink to="/live">Live</MyLink>
                        <MyLink to="/gallery">Галерея</MyLink>
                        <MyLink to="/discography">Дискография</MyLink>
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
