import classes from './LivePage.module.scss';
import Container from 'shared/ui/Container/Container';
import LiveList from 'features/LiveList/LiveList';
import { alreadyEvents, futureEvents } from '../store';

const LivePage = () => {
    return (
        <div className={classes.livePage}>
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
