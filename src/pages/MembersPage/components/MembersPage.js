import classes from './Members.module.scss';
import MyLink from 'shared/components/MyLink';
import MembersContainer from 'features/MembersContainer';
import Container from 'shared/components/Container/Container';
import FullHeight from 'shared/components/FullHeight/FullHeight';

const MembersPage = () => {
    return (
        <FullHeight>
            <MembersContainer />
            <div className={classes.buttons}>
                <Container>
                    <nav>
                        <ul>
                            <MyLink to="masha">M.</MyLink>
                            <MyLink to="burda">A.</MyLink>
                            <MyLink to="misha">M.</MyLink>
                            <MyLink to="kres">A.</MyLink>
                        </ul>
                    </nav>
                </Container>
            </div>
            <div className={classes.footer}>
                <Container>
                    Все персонажи являются вымышленными и любое совпадение с реально живущими или
                    когда-либо жившими людьми случайно.
                </Container>
            </div>
        </FullHeight>
    );
};

export default MembersPage;
