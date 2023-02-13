import classes from './LivePage.module.scss';
import Container from 'shared/components/Container/Container';
import LiveList from 'features/LiveList/LiveList';
import HeaderTitle from 'entities/HeaderTitle/HeaderTitle';
import { alreadyEvents, futureEvents } from '../store';

const LivePage = () => {
    return (
        <div className={classes.livePage}>
            <HeaderTitle>Live</HeaderTitle>
            <div className={classes.body}>
                <Container>
                    <div className={classes.title}>Будущие</div>
                    <LiveList liveItems={futureEvents} />
                    <div className={classes.title}>Состоявшиеся</div>
                    <LiveList liveItems={alreadyEvents} />
                </Container>
            </div>
        </div>
    );
};

export default LivePage;
