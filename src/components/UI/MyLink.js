import { NavLink } from 'react-router-dom';

const MyLink = ({ to, children }) => {
    return (
        <li>
            <NavLink to={to}>{children}</NavLink>
        </li>
    );
}

export default MyLink;