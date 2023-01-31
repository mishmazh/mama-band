import LazyImage from 'shared/components/LazyImage/LazyImage';
import { burda, kres, masha, misha } from 'shared/images-import';
import Container from 'shared/components/Container/Container';
import Title from 'shared/components/Title/Title';
import classes from "./Members.module.scss";

const MemberItem = ({ member, title, children }) => {
    return (
        <div>
            {member === 'masha' && <LazyImage src={masha} alt={title} />}
            {member === 'burda' && <LazyImage src={burda} alt={title} />}
            {member === 'misha' && <LazyImage src={misha} alt={title} />}
            {member === 'kres' && <LazyImage src={kres} alt={title} />}
            <Container>
                <div className={classes.memberItem}>
                    <Title>{title}</Title>
                    <div className="content">{children}</div>
                </div>
            </Container>
        </div>
    );
};

export default MemberItem;
