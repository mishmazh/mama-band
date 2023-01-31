import classes from './FullHeight.module.scss';

const FullHeight = ({ children }) => {
    return <div className={classes.fullHeight}>{children}</div>;
};

export default FullHeight;