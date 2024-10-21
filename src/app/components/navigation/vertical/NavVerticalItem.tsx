
import Icon from '@mui/material/Icon';
import {ListItem, ListItemText} from '@mui/material';
import { makeStyles, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import NavLinkAdapter from '../NavLinkAdaptor';

// Define types for props and other interfaces
interface Badge {
  title: string;
  bg: string;
  fg: string;
}

interface NavItem {
  id: string;
  title?: string;
  icon?: string;
  url?: string;
  exact?: boolean;
  auth?: string[];
  badge?: Badge;
  children?: NavItem[];
}

interface NavVerticalItemProps {
  item: NavItem;
  nestedLevel: number;
}


const NavVerticalItem: React.FC<NavVerticalItemProps> = (props) => {

  
  const { item, nestedLevel } = props;


  return (
    <ListItem
      className={clsx('test', 'list-item')}
    >
      {item.icon && (
        <Icon className="list-item-icon text-16 flex-shrink-0" color="action">
          {item.icon}
        </Icon>
      )}

      <ListItemText
        className="list-item-text"
        primary={item.title}
        classes={{ primary: 'text-14 list-item-text-primary' }}
      />Vertical Item
    </ListItem>
  );
};

export default React.memo(NavVerticalItem);
