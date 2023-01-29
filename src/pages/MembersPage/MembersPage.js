import MyLink from '../../components/UI/MyLink';
import MembersContainer from "../../components/Members/MembersContainer";

const MembersPage = () => {
    return (
        <div className="members">
            <MembersContainer />
            <div className="members__buttons">
                <div className="container">
                    <nav>
                        <ul>
                            <MyLink to="masha">M.</MyLink>
                            <MyLink to="burda">A.</MyLink>
                            <MyLink to="misha">M.</MyLink>
                            <MyLink to="kres">A.</MyLink>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="members__footer">
                <div className="container">
                    Все персонажи являются вымышленными и любое совпадение с реально живущими или
                    когда-либо жившими людьми случайно.
                </div>
            </div>
        </div>
    );
}

export default MembersPage;
