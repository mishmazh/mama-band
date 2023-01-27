import MyLink from '../UI/MyLink';

const Header = () => {
    return (
        <header className="header">
            <nav className="container">
                <ul>
                    <MyLink to="/">Главная</MyLink>
                    <MyLink to="/about">О группе</MyLink>
                    <MyLink to="/members/masha">Участники</MyLink>
                    <MyLink to="/live">Live</MyLink>
                    <MyLink to="/gallery">Галерея</MyLink>
                    <MyLink to="/discography">Дискография</MyLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;