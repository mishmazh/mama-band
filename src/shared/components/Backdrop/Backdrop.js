import classes from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => {
    return <div className={classes.backdrop} onClick={onClick} />;
};

export default Backdrop;
