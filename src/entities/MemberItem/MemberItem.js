import classes from './MemberItem.module.scss';
import { burda, kres, masha, misha } from 'shared/lib/imagesImport';
import Container from 'shared/components/Container/Container';
import Image from 'shared/components/Image/Image';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import { classNames } from 'shared/lib/classNames';
import { NavLink } from 'react-router-dom';

const MemberItem = ({ member, title, left, right, children }) => {
    return (
        <div
            className={classNames(classes.memberItem, {
                [classes.masha]: member === 'masha',
                [classes.burda]: member === 'burda',
                [classes.misha]: member === 'misha',
                [classes.kres]: member === 'kres',
            })}
        >
            <HeaderTitle>Участники</HeaderTitle>
            <Container>
                <div className={classes.body}>
                    {member === 'masha' && (
                        <Image src={masha} className={classes.imageHidden} alt={title} />
                    )}
                    {member === 'burda' && (
                        <Image src={burda} className={classes.imageHidden} alt={title} />
                    )}
                    {member === 'misha' && (
                        <Image src={misha} className={classes.imageHidden} alt={title} />
                    )}
                    {member === 'kres' && (
                        <Image src={kres} className={classes.imageHidden} alt={title} />
                    )}
                    <div className={classes.title}>
                        <NavLink to={'/members/' + left} className={classes.left} />
                        <div>{title}</div>
                        <NavLink to={'/members/' + right} className={classes.right} />
                    </div>
                    <div className={classes.textContent}>{children}</div>
                </div>
            </Container>
        </div>
    );
};

export default MemberItem;
