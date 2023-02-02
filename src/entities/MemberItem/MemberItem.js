import classes from './MemberItem.module.scss';
import { burda, kres, masha, misha } from 'shared/lib/imagesImport';
import Container from 'shared/components/Container/Container';
import Title from 'shared/components/Title/Title';
import Image from 'shared/components/Image/Image';
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const MemberItem = ({ member, title, children }) => {
    return (
        <>
            {member === 'masha' && <Image src={masha} alt={title} isAbsolute />}
            {member === 'burda' && <Image src={burda} alt={title} isAbsolute />}
            {member === 'misha' && <Image src={misha} alt={title} isAbsolute />}
            {member === 'kres' && <Image src={kres} alt={title} isAbsolute />}
            <HeaderTitle>Участники</HeaderTitle>
            <Container>
                <div className={classes.memberItem}>
                    <Title>{title}</Title>
                    <div className={classes.textContent}>{children}</div>
                </div>
            </Container>
        </>
    );
};

export default MemberItem;
