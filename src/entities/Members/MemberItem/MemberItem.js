import cls from './MemberItem.module.scss';
import { burda_m, kres_m, masha_m, misha_m } from 'shared/lib/imagesImport';
import Container from 'shared/ui/Container/Container';
import Image from 'shared/ui/Image/Image';
import { classNames } from 'shared/lib/classNames';
import AppLink from 'shared/ui/AppLink/AppLink';

export const MemberItem = ({ member, title, children }) => {
    const memberMasha = member === 'masha';
    const memberBurda = member === 'burda';
    const memberMisha = member === 'misha';
    const memberKres = member === 'kres';

    return (
        <div
            className={classNames(cls.memberItem, {
                [cls.masha]: memberMasha,
                [cls.burda]: memberBurda,
                [cls.misha]: memberMisha,
                [cls.kres]: memberKres,
            })}
        >
            <Container>
                <div className={cls.body}>
                    {memberMasha && (
                        <Image src={masha_m} className={cls.imageHidden} alt={title} />
                    )}
                    {memberBurda && (
                        <Image src={burda_m} className={cls.imageHidden} alt={title} />
                    )}
                    {memberMisha && (
                        <Image src={misha_m} className={cls.imageHidden} alt={title} />
                    )}
                    {memberKres && (
                        <Image src={kres_m} className={cls.imageHidden} alt={title} />
                    )}

                    <div className={cls.title}>{title}</div>
                    <div className={cls.content}>{children}</div>
                    <div className={cls.navs}>
                        <nav>
                            <ul>
                                <AppLink to="/members/masha">M.</AppLink>
                                <AppLink to="/members/burda">A.</AppLink>
                                <AppLink to="/members/misha">M.</AppLink>
                                <AppLink to="/members/kres">A.</AppLink>
                            </ul>
                        </nav>
                    </div>
                    <footer className={cls.footer}>
                            Все персонажи являются вымышленными и любое совпадение с реально живущими или
                            когда-либо жившими людьми случайно.
                    </footer>
                </div>
            </Container>
        </div>
    );
};
