import cls from './MemberItem.module.scss';
import { burda, kres, masha, misha } from 'shared/lib/imagesImport';
import Container from 'shared/ui/Container/Container';
import Image from 'shared/ui/Image/Image';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import { classNames } from 'shared/lib/classNames';

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
            <HeaderTitle>Участники</HeaderTitle>
            <Container>
                <div className={cls.body}>
                    {memberMasha && (
                        <Image src={masha} className={cls.imageHidden} alt={title} />
                    )}
                    {memberBurda && (
                        <Image src={burda} className={cls.imageHidden} alt={title} />
                    )}
                    {memberMisha && (
                        <Image src={misha} className={cls.imageHidden} alt={title} />
                    )}
                    {memberKres && (
                        <Image src={kres} className={cls.imageHidden} alt={title} />
                    )}

                    <div className={cls.title}>{title}</div>
                    <div className={cls.content}>{children}</div>
                </div>
            </Container>
        </div>
    );
};
