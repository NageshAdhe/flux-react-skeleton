
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
      className={clsx('nav-link-title')}
    >
      {item.icon && (
        <Icon className="nav-link-icon text-lg flex-shrink-0" color="action">
          {item.icon}
        </Icon>
      )}

      <ListItemText
        className="list-link-title-text"
        primary={item.title}
        classes={{ primary: 'text-xs list-item-text-primary' }}
      />Vertical Item
    </ListItem>
  );
};

export default React.memo(NavVerticalItem);
