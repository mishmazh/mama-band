const LiveItem = ({ item: { date, name, city, isSold } }) => {
    return (
        <div className="live-item">
            <div>
                <div className="live-item__date">{date}</div>
                <div className="live-item__name">{name}</div>
            </div>
            <div className="live-item__city">{city}</div>
            <div>{isSold ? <div className="live-item__sold" /> : ''}</div>
        </div>
    );
};

export default LiveItem;
