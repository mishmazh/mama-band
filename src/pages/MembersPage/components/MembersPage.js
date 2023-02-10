import classes from './MembersPage.module.scss';
import AppLink from 'shared/components/AppLink';
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
                            <AppLink to="masha">M.</AppLink>
                            <AppLink to="burda">A.</AppLink>
                            <AppLink to="misha">M.</AppLink>
                            <AppLink to="kres">A.</AppLink>
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
