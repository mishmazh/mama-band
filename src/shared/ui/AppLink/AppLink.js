import { NavLink } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

const AppLink = ({ to, className, children, onClick }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={classNames(className, {})}
        >
            {children}
        </NavLink>
    );
};

export default AppLink;