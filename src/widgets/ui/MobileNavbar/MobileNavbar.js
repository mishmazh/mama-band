import { useState } from 'react';
import cls from './MobileNavbar.module.scss';
import Backdrop from 'shared/components/Backdrop/Backdrop';
import { navLinks } from '../../store';
import MenuToggle from 'entities/MenuToggle/MenuToggle';
import { Drawer } from 'entities/Drawer';

const MobileNavbar = () => {
    const [isOpen, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <div className={cls.mobileNavbar}>
            <MenuToggle isOpen={isOpen} openMenu={openMenu} />
            <Drawer isOpen={isOpen} closeMenu={closeMenu} navLinks={navLinks} />
            {isOpen && <Backdrop onClick={closeMenu} />}
        </div>
    );
};

export default MobileNavbar;
