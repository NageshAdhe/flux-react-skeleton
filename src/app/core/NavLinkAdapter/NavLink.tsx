import React, { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface NavLinkProps extends LinkProps {
    children: React.ReactNode;
    activeClassName?: string;
    className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ children, activeClassName = 'active', className, ...props }, ref) => {
        const { asPath } = useRouter();
        const isActive = asPath === props.href || asPath === props.as;

        return (
            <Link {...props} legacyBehavior>
                <a
                    ref={ref}
                    className={clsx(className, { [activeClassName]: isActive })}
                >
                    {children}
                </a>
            </Link>
        );
    }
);

NavLink.displayName = 'NavLink';

export default NavLink;
