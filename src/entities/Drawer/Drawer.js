import cls from './Drawer.module.scss';
import AppLink from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import { useCallback, useEffect, useState } from 'react';

export const Drawer = (props) => {
    const {
        isOpen,
        navLinks,
        closeMenu,
        lazy
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    }, [closeMenu]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        } else {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <div className={classNames('', { [cls.opened]: isOpen })}>
            <div className={cls.overlay} onClick={closeMenu} />
            <div className={cls.content}>
                <nav className={cls.body}>
                    {navLinks.map(({ to, text }, key) => {
                        return <AppLink
                            to={to}
                            onClick={closeMenu}
                            key={key}
                            className={cls.link}
                        >
                            {text}
                        </AppLink>;
                    })}
                </nav>
            </div>
        </div>
    );
};
