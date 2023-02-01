import LiveItem from 'entities/LiveItem/LiveItem';
import Delimiter from "shared/components/Delimiter/Delimiter";

const LiveList = ({ liveItems }) => {
    if (liveItems.length === 0) {
        return <Delimiter />;
    }

    return (
        <div>
            {liveItems.map((item) => {
                return <LiveItem item={item} key={item.id} />;
            })}
        </div>
    );
};

export default LiveList;
