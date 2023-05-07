import { cover } from 'shared/lib/imagesImport';
import classes from './DiscographyPage.module.scss';
import Image from 'shared/ui/Image/Image';
import Container from 'shared/ui/Container/Container';
import { album } from '../store';

const DiscographyPage = () => {
    return (
        <div className={classes.discographyPage}>
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
                            <a
                                href="https://vk.com/club213535217"
                                target="_blank"
                                rel="noreferrer nofollow"
                            >
                                <div className={classes.itunes} />
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default DiscographyPage;
