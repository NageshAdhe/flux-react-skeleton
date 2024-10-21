
import Icon from '@mui/material/Icon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles, useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { withRouter } from 'next/router';


// Define types for the props and other structures
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
  target?: string;
  auth?: string[];
  badge?: Badge;
  children?: NavItem[];
}

interface NavVerticalLinkProps {
  item: NavItem;
  nestedLevel: number;
}



const NavVerticalLink: React.FC<NavVerticalLinkProps> = (props) => {
 
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { item, nestedLevel } = props;
  
 
  return (
    <ListItem
      component="a"
      href={item.url}
      target={item.target || '_blank'}
      className={clsx('Vertical-link', 'list-item')}     
      role="button"
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
      />Vertical Link
    
    </ListItem>
  );
};

export default React.memo(NavVerticalLink); 



