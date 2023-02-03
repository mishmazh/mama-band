import { cover } from 'shared/lib/imagesImport';
import classes from './DiscographyPage.module.scss';
import Image from 'shared/components/Image/Image';
import HeaderTitle from 'entities/HeaderTitle/HeaderTitle';
import Container from 'shared/components/Container/Container';
import { album } from 'shared/lib/dataStorage';

const DiscographyPage = () => {
    return (
        <div className={classes.discographyPage}>
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
