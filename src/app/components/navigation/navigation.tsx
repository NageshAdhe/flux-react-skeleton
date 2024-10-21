import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import clsx from 'clsx';
import NavVerticalCollapse from './vertical/NavVerticalCollapse';
import NavVerticalGroup from './vertical/NavVerticalGroup';
import NavVerticalItem from './vertical/NavVerticalItem';
import NavVerticalLink from './vertical/NavVerticalLink';
import NavItem, { registerComponent } from './navItem';
import  NavVertical  from './vertical/vertical-navigation';
import { list } from 'postcss';
import './navigation.scss';

// Register Fuse Navigation Components
registerComponent('vertical-group', NavVerticalGroup);
registerComponent('vertical-collapse',NavVerticalCollapse);
registerComponent('vertical-item', NavVerticalItem);
registerComponent('vertical-link', NavVerticalLink);
// registerComponent('vertical-divider', () => <Divider className="my-16" />);
// registerComponent('horizontal-divider', () => <Divider className="my-16" />);

  interface NavigationProps {
    navigation: Array<{ id: string; type: string }>;
    type?: 'vertical' | 'horizontal';   
    active: string;
    dense?: boolean;
    className?: string;
    }
// Define a styled component

const Navigation: React.FC<NavigationProps> = (props) => {
const { navigation, type = 'vertical', active, dense, className } = props;
console.log(navigation); 
       
   
    if (navigation.length > 0) {
        switch (type) {
            case 'vertical': {
                return <NavVertical dense navigation={navigation} active={""} />;
            }            
            default: {
                return <NavVertical dense navigation={navigation} active={""} />;
            }
        }
    } 
};

export default React.memo<NavigationProps>(Navigation);