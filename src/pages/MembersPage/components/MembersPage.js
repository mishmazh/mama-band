import classes from './MembersPage.module.scss';
import MyLink from 'shared/components/MyLink';
import MembersContainer from 'features/MembersContainer';
import Container from 'shared/components/Container/Container';

const MembersPage = () => {
    return (
        <div className={classes.membersPage}>
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
        </div>
    );
};

export default MembersPage;
