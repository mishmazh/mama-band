import cls from './MembersPage.module.scss';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../../NotFoundPage';
import { memberStore } from '../store';
import { MemberItem } from 'entities/Members/MemberItem/MemberItem';

const MembersPage = () => {
    return (
        <div className={cls.membersPage}>
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
        </div>
    );
};

export default MembersPage;
