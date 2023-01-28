import LazyImage from '../UI/LazyImage/LazyImage';
import { burda, kres, masha, misha } from '../../helpers/images-import';

const MemberItem = ({ member, title, children }) => {
    return (
        <div>
            {member === 'masha' && <LazyImage src={masha} alt={title} />}
            {member === 'burda' && <LazyImage src={burda} alt={title} />}
            {member === 'misha' && <LazyImage src={misha} alt={title} />}
            {member === 'kres' && <LazyImage src={kres} alt={title} />}
            <div className="container">
                <div className="members__body">
                    <div className="title">{title}</div>
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MemberItem;
