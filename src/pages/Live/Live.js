import LiveItem from '../../components/Live/LiveItem';
import LazyImage from '../../components/UI/LazyImage/LazyImage';
import { live } from '../../helpers/images-import';
import { liveAlready } from '../../helpers/data-storage';

const Live = () => {
    return (
        <div className="live">
            <LazyImage src={live} alt="live-page" />
            <div className="live__wrapper">
                <div className="container">
                    <div className="live__title">Будущие</div>
                    <div className="live__delimiter">—</div>
                    <div className="live__title">Состоявшиеся</div>
                    <div>
                        {liveAlready.map((item) => {
                            return <LiveItem item={item} key={item.id} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;
