import classes from './HeaderTitle.module.scss';

const HeaderTitle = ({ children }) => {
    return <div className={classes.headerTitle}>{children}</div>;
};

export default HeaderTitle;