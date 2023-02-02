import { NavLink } from 'react-router-dom';

const MyLink = ({ to, children, onClick }) => {
    return (
        <li>
            <NavLink to={to} onClick={onClick}>{children}</NavLink>
        </li>
    );
}

export default MyLink;