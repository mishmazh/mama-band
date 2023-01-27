import LazyImage from '../../components/UI/LazyImage/LazyImage';
import { about } from '../../helpers/images-import';

const About = () => {
    return (
        <div className="about">
            <LazyImage src={about} alt="about-page" />
            <div className="container">
                <div className="about__body">
                    <div className="title">М.А.М.А.</div>
                    <div className="content">
                        <p>
                            Группа появилась на заре 2020 года, когда мир еще не знал кто такие
                            дота-реперы, фонк исполнители и прочие создатели “хорошей” музыки.
                        </p>
                        <p>
                            До сих пор не известно что значит название данной группы, возможно это
                            какая-то абревиатура.
                        </p>
                        <p>
                            Первые концерты группы прошли зимой, прямо на какуне праздников 2021
                            года в печально-известном клубе “Boys” (который закрыли на следующий
                            день).
                        </p>
                        <p>
                            Счастливчики, которые попадают на закрытые выступления, рассказывают о
                            большом драйве эмоций, который они испытывают за 3 часа, ведь они не
                            знают ни одной песни, которую записала группа “М.А.М.А.”, чем и
                            пользуются музыканты - перепевая и переигрывая песни других популярных
                            групп, тем самым надёжно закрепившись в андеграундной тусовке.
                        </p>
                        <p>
                            Ни один из участников группы ни разу не давал публично интервью, кроме
                            басиста, которого спрашивали про его предыдущую группу - “Лес aka
                            Направление Москва-Колпино”, исходя из чего неизвестна дальнейшая судьба
                            группы, но если брать в расчёт сплетни и слухи, то гитарист Александр
                            всё еще пытается уговорить остальных записать собственные треки.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;