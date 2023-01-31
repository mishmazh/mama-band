import classes from "./LivePage.module.scss";
import LiveItem from './LiveItem';
import LazyImage from '../../shared/components/LazyImage/LazyImage';
import { live } from '../../shared/images-import';
import { liveAlready } from '../../shared/data-storage';
import Container from '../../shared/components/Container/Container';
import FullHeight from "../../shared/components/FullHeight/FullHeight";

const LivePage = () => {
    return (
        <FullHeight>
            <div className={classes.center}>
                    <LazyImage src={live} alt="live-page" />
                    <div className={classes.body}>
                        <Container>
                            <div className={classes.title}>Будущие</div>
                            <div className={classes.delimiter}>—</div>
                            <div className={classes.title}>Состоявшиеся</div>
                            <div>
                                {liveAlready.map((item) => {
                                    return <LiveItem item={item} key={item.id} />;
                                })}
                            </div>
                        </Container>
                    </div>
                </div>
        </FullHeight>
    );
};

export default LivePage;
