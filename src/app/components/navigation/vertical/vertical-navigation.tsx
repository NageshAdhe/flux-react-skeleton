import { List, ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import NavItem from '../navItem';
import NavLinkAdapter from '../NavLinkAdaptor';


interface VerticalNavigationProps {
    navigation: Array<{ id: string; type: string }>;
    active: string;
    dense?: boolean;
}

const NavVertical: React.FC<VerticalNavigationProps> = (props) => {
    const { navigation, active, dense } = props;
    return (
        <div className='vertical-nav'>
            {/* <fuse-loading-bar></fuse-loading-bar> */}
            <div className="vertical-navigation-header">
                LOGO
            </div>
            <div className="vertical-navigation-content">




                <List
                    className={clsx(
                        'navigation whitespace-nowrap',
                        'navigation',
                        'verticalNavigation',
                        `active-${active}-list`,
                        dense && 'dense'
                    )}
                >
                    {navigation.map((_item) => (
                        <NavItem
                            key={_item.id}
                            type={`vertical-${_item.type}`}
                            item={_item}
                            nestedLevel={0}
                        />
                    ))}
                </List>



            </div>
        </div>
    );
};

//  export default NavVertical;
export default React.memo<VerticalNavigationProps>(NavVertical);
