import { useLocation } from 'react-router-dom';
import cls from './MobileNavbarTitle.module.scss';

const MobileNavbarTitle = () => {
    let { pathname } = useLocation();

    switch (pathname) {
    case '/':
        pathname = '';
        break;
    case '/about':
        pathname = 'О группе';
        break;
    case '/members/masha':
        pathname = 'Участники';
        break;
    case '/members/burda':
        pathname = 'Участники';
        break;
    case '/members/misha':
        pathname = 'Участники';
        break;
    case '/members/kres':
        pathname = 'Участники';
        break;
    case '/live':
        pathname = 'Live';
        break;
    case '/gallery':
        pathname = 'Галерея';
        break;
    case '/discography':
        pathname = 'Дискография';
        break;
    }

    return (
        <div className={cls.mobileNavbarTitle}>
            {pathname}
        </div>
    );
};

export default MobileNavbarTitle;
