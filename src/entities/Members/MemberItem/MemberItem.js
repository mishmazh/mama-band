import classes from './MemberItem.module.scss';
import { burda, kres, masha, misha } from 'shared/helpers/imagesImport';
import Container from 'shared/components/Container/Container';
import Image from 'shared/components/Image/Image';
import HeaderTitle from '../../HeaderTitle/HeaderTitle';
import { classNames } from 'shared/helpers/classNames';
import Arrow from '../Arrow/Arrow';

export const MemberItem = ({ member, title, leftTo, rightTo, children }) => {
    const memberMasha = member === 'masha';
    const memberBurda = member === 'burda';
    const memberMisha = member === 'misha';
    const memberKres = member === 'kres';

    return (
        <div
            className={classNames(classes.memberItem, {
                [classes.masha]: memberMasha,
                [classes.burda]: memberBurda,
                [classes.misha]: memberMisha,
                [classes.kres]: memberKres,
            })}
        >
            <HeaderTitle>Участники</HeaderTitle>
            <Container>
                <div className={classes.body}>
                    {memberMasha && (
                        <Image src={masha} className={classes.imageHidden} alt={title} />
                    )}
                    {memberBurda && (
                        <Image src={burda} className={classes.imageHidden} alt={title} />
                    )}
                    {memberMisha && (
                        <Image src={misha} className={classes.imageHidden} alt={title} />
                    )}
                    {memberKres && <Image src={kres} className={classes.imageHidden} alt={title} />}
                    <div className={classes.title}>
                        <Arrow to={leftTo} className={classes.left} />
                        <div>{title}</div>
                        <Arrow to={rightTo} className={classes.right} />
                    </div>
                    <div className={classes.textContent}>{children}</div>
                </div>
            </Container>
        </div>
    );
};
