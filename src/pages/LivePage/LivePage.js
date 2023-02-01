import classes from './LivePage.module.scss';
import { bg_live } from 'shared/lib/imagesImport';
import Container from 'shared/components/Container/Container';
import FullHeight from 'shared/components/FullHeight/FullHeight';
import LiveList from 'features/LiveList';
import Image from 'shared/components/Image/Image';
import HeaderTitle from "../../widgets/HeaderTitle/HeaderTitle";

const LivePage = () => {
    const alreadyItems = [
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

    const futureItems = [];

    return (
        <FullHeight>
            <Image src={bg_live} alt="live-page" />
            <HeaderTitle>Live</HeaderTitle>
            <div className={classes.body}>
                <Container>
                    <div className={classes.title}>Будущие</div>
                    <LiveList liveItems={futureItems} />
                    <div className={classes.title}>Состоявшиеся</div>
                    <LiveList liveItems={alreadyItems} />
                </Container>
            </div>
        </FullHeight>
    );
};

export default LivePage;
