import { NavLink } from 'react-router-dom';

const AppLink = ({ to, children, onClick }) => {
    return (
        <NavLink to={to} onClick={onClick}>{children}</NavLink>
    );
};

export default AppLink;