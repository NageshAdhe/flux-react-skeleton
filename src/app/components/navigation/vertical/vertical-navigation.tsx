import { Icon, List, ListSubheader, styled, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import clsx from 'clsx';
import React from 'react';
import NavItem from '../navItem';
import NavLinkAdapter from '../NavLinkAdaptor';
import './vertical-navigation.scss';
import logo from '../../../assets/images/logo/logo.svg';

console.log(logo);
const CustomList = styled(List)({
    padding: '0px 12px',
  });
  
interface VerticalNavigationProps {
    navigation: Array<{ id: string; type: string }>;
    active: string;
    dense?: boolean;
}

const NavVertical: React.FC<VerticalNavigationProps> = (props) => {
    const { navigation, active, dense } = props;
    return (
        <div className='navigation-vertical'>
            <div className='nav-header'>
                <div className='logo-content'>
                    <a className='logo-icon h-8 w-8' href="/">
                    <Image
                    src={logo.src} // The actual path of the image
                    alt="Logo"
                    width={logo.width} // Provided width
                    height={logo.height} // Provided height
                    />
                    </a>              
                    <div className='logo-text'>
                        <p className='logo-text-primary tracking-wider'>FUSE</p>
                        <p className='logo-text-secondary tracking-wider'>REACT</p>
                    </div>   
                 </div>                            
                <button>
                <Icon className="menu-icon flex-shrink-0" color="action">
                menu
                </Icon>

                </button>
            </div>
        <div className="nav-menu">
            <CustomList disablePadding
                className={clsx(                       
                    'navigation',                     
                    `active-${active}-list`,
                    dense && 'dense',
                    "px-3"
                )}
            >
                {navigation.map((_item,index) => (
                    <NavItem
                        index={index}
                        key={_item.id}
                        type={`vertical-${_item.type}`}
                        item={_item}
                        nestedLevel={0}
                    />
                ))}
                
            </CustomList>



        </div>          
        </div>
    );
};

//  export default NavVertical;
export default React.memo<VerticalNavigationProps>(NavVertical);
