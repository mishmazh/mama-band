import LiveItem from 'entities/LiveItem/LiveItem';
import Delimiter from "shared/components/Delimiter/Delimiter";

const LiveList = ({ liveItems }) => {
    if (liveItems.length === 0) {
        return <Delimiter />;
    }

    return (
        <div>
            {liveItems.map((items, key) => {
                return <LiveItem items={items} key={key} />;
            })}
        </div>
    );
};

export default LiveList;
