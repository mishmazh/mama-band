import LiveItem from '../../components/Live/LiveItem';
import LazyImage from '../../components/UI/LazyImage/LazyImage';
import { live } from '../../helpers/images-import';

const Live = () => {
    const already = [
        {
            id: 1,
            date: '22.12.2022',
            name: 'Music Workshop',
            city: 'Санкт-Петербург',
            isSold: true,
        },
        {
            id: 2,
            date: '04.08.2022',
            name: 'Hendrix Studio',
            city: 'Москва',
            isSold: true,
        },
        {
            id: 3,
            date: '30.12.2021',
            name: 'Zebra Audio',
            city: 'Москва',
            isSold: true,
        },
    ];

    const future = [];

    return (
        <div className="live">
            <LazyImage src={live} alt="live-page" />
                <div className="live__wrapper">
                    <div className="container">
                        <div className="live__title">Будущие</div>
                        <div className="live__delimiter">—</div>
                        <div className="live__title">Состоявшиеся</div>
                        <div>
                            {already.map((item) => {
                                return <LiveItem item={item} key={item.id} />;
                            })}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Live;
