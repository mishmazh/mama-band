import classes from './Arrow.module.scss';
import { classNames } from 'shared/helpers/classNames';
import { NavLink } from 'react-router-dom';

const Arrow = ({ to, className, children }) => {
    return (
        <NavLink
            className={classNames(className, { [classes.disable]: !to })}
            to={'/members/' + to}
        >
            {children}
        </NavLink>
    );
};

export default Arrow;
