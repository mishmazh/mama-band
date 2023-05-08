import { useCallback, useState } from 'react';
import cls from './MobileNavbar.module.scss';
import { navLinks } from '../../store';
import MenuToggle from 'entities/MenuToggle/MenuToggle';
import { Drawer } from 'entities/Drawer/Drawer';
import MobileNavbarTitle from 'entities/MobileNavbarTitle/MobileNavbarTitle';
import { classNames } from '../../../shared/lib/classNames';

const MobileNavbar = ({ isFade }) => {
    const [isOpen, setOpen] = useState(false);

    const openMenu = useCallback(() => {
        setOpen(prev => !prev);
    }, [isOpen]);

    const closeMenu = useCallback(() => {
        setOpen(false);
    }, [isOpen]);

    return (
        <div className={classNames(cls.mobileNavbar, { [cls.fade]: isFade })}>
            <MobileNavbarTitle />
            <MenuToggle isOpen={isOpen} openMenu={openMenu}/>
            <Drawer
                lazy
                isOpen={isOpen}
                closeMenu={closeMenu}
                navLinks={navLinks}/>
        </div>
    );
};

export default MobileNavbar;
