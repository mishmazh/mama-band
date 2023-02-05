import classes from './LiveItem.module.scss';

const LiveItem = ({ items }) => {
    const { date, name, city, isSold } = items;

    return (
        <div className={classes.liveItem}>
            <div className={classes.item1}>
                <div className={classes.date}>{date}</div>
                <div>{name}</div>
            </div>
            <div className={classes.item2}>
                <div>{city}</div>
            </div>
            <div className={classes.item3}>{isSold ? <div className={classes.sold} /> : ''}</div>
        </div>
    );
};

export default LiveItem;
