import cls from './AboutPage.module.scss';
import { bg_about_m } from 'shared/lib/imagesImport';
import Container from 'shared/ui/Container/Container';
import Image from 'shared/ui/Image/Image';
import { Text } from 'shared/ui/Text/Text';

const AboutPage = () => {
    return (
        <div className={cls.aboutPage}>
            <Container>
                <div className={cls.body}>
                    <Image src={bg_about_m} className={cls.imageHidden} alt="about" />
                    <div className={cls.content}>
                        <Text
                            className={cls.titleHidden}
                            title='М.А.М.А.'
                            text={
                                <>
                                    <p>
                                        Группа появилась на заре 2020 года, когда мир еще не знал кто такие
                                        дота-реперы, фонк исполнители и прочие создатели “хорошей” музыки.
                                    </p>
                                    <p>
                                        До сих пор не известно что означает название данной группы, возможно это
                                        какая-то аббревиатура.
                                    </p>
                                    <p>
                                        Первые концерты группы прошли зимой, прямо накакуне праздников 2021
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
                                </>
                            }
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutPage;
