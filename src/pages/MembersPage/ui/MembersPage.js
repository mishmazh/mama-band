import classes from './MembersPage.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import Container from 'shared/ui/Container/Container';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../NotFoundPage';
import { memberStore } from '../store';
import { MemberItem } from 'entities/Members/MemberItem/MemberItem';

const MembersPage = () => {
    return (
        <div className={classes.membersPage}>
            <Routes>
                {
                    memberStore.map((props, key) => {
                        const {
                            member,
                            title,
                            leftTo,
                            rightTo,
                            content
                        } = props;

                        const memberItem = (
                            <MemberItem member={member} title={title} leftTo={leftTo} rightTo={rightTo}>
                                {content}
                            </MemberItem>
                        );
                        
                        return <Route
                            path={'/' + member}
                            element={memberItem}
                            key={key}
                        />;
                    })
                }

                <Route path="*" element={<NotFoundPage />} />
            </Routes>

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
