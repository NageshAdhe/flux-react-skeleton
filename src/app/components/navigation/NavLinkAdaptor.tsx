import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

interface NavLinkAdapterProps {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
}

const NavLinkAdapter = forwardRef<HTMLAnchorElement, NavLinkAdapterProps>(
  ({ href, exact = false, className, activeClassName, children, ...rest }, ref) => {
    const { pathname } = useRouter();

    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
      <Link href={href} passHref>
        <a ref={ref} className={clsx(className, { [activeClassName || 'active']: isActive })} {...rest}>
          {children}
        </a>
      </Link>
    );
  }
);

NavLinkAdapter.displayName = 'NavLinkAdapter';

export default NavLinkAdapter;
