import { bg_discography, cover } from 'shared/lib/imagesImport';
import classes from './Discography.module.scss';
import Image from 'shared/components/Image/Image';
import HeaderTitle from 'entities/HeaderTitle/HeaderTitle';
import Container from 'shared/components/Container/Container';

const DiscographyPage = () => {
    const album = [
        { number: '1.', name: 'Претенд' },
        { number: '2.', name: 'Диспансер' },
        { number: '3.', name: 'Мудрое дерево' },
        { number: '4.', name: 'Страха нет' },
        { number: '5.', name: 'Селин' },
        { number: '6.', name: 'Дeлимобиль' },
        { number: '7.', name: 'Барка' },
        { number: '8.', name: 'Мотя' },
        { number: '9.', name: 'Не курю уже месяц' },
        { number: '10.', name: 'Маша Фортуна, покажи...' },
    ];

    return (
        <div className={classes.discographyPage}>
            <Image
                src={bg_discography}
                className={classes.mobileHidden}
                alt="discography"
                isAbsolute
            />
            <HeaderTitle>Дискография</HeaderTitle>
            <div className={classes.body}>
                <Container>
                    <div className={classes.items}>
                        <div className={classes.cover}>
                            <Image src={cover} alt="cover" />
                        </div>
                        <div className={classes.release}>
                            <div className={classes.title}>Релиз - TBA</div>
                            <div className={classes.subtitle}>Треклист:</div>
                            <ul>
                                {album.map(({ number, name }, key) => {
                                    return (
                                        <li key={key}>
                                            <span>{number + ' '}</span>
                                            {name}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className={classes.itunes} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default DiscographyPage;
