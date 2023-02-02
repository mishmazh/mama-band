import { useState } from 'react';
import MenuToggle from 'features/MenuToggle/MenuToggle';
import Drawer from 'features/Drawer/Drawer';
import Backdrop from "shared/components/Backdrop/Backdrop";

const MobileNavigation = () => {
    const [isOpen, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <MenuToggle isOpen={isOpen} openMenu={openMenu} />
            <Drawer isOpen={isOpen} closeMenu={closeMenu} />
            {isOpen && <Backdrop onClick={closeMenu} />}
        </>
    );
};

export default MobileNavigation;