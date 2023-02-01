import classes from "./LiveItem.module.scss";

const LiveItem = ({ item }) => {
    const { date, name, city, isSold } = item;

    return (
        <div className={classes.liveItem}>
            <div>
                <div className={classes.date}>{date}</div>
                <div>{name}</div>
            </div>
            <div className={classes.city}>{city}</div>
            <div>{isSold ? <div className={classes.sold} /> : ''}</div>
        </div>
    );
};

export default LiveItem;
