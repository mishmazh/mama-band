import classes from './AboutPage.module.scss';
import LazyImage from '../../shared/components/LazyImage/LazyImage';
import { about } from '../../shared/images-import';
import Container from '../../shared/components/Container/Container';
import Title from '../../shared/components/Title/Title';
import FullHeight from '../../shared/components/FullHeight/FullHeight';

const AboutPage = () => {
    return (
        <FullHeight>
            <LazyImage src={about} alt="about-page" />
            <Container>
                <div className={classes.body}>
                    <Title>М.А.М.А.</Title>
                    <div className={classes.textContent}>
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
            </Container>
        </FullHeight>
    );
};

export default AboutPage;
