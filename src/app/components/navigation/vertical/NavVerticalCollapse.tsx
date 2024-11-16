import Collapse from '@mui/material/Collapse';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { makeStyles } from '@mui/material/styles';
import clsx from 'clsx';
import React, { useEffect, useState, useMemo } from 'react';
import NavItem from '../navItem';
import { useRouter } from 'next/router';

// Define types for props and other structures
interface Badge {
  title: string;
  bg: string;
  fg: string;
}

interface NavItemProps {
  id: string;
  title?: string;
  icon?: string;
  url?: string;
  target?: string;
  auth?: string[];
  badge?: Badge;
  children?: NavItemProps[];
  type?: string;
}

interface NavVerticalCollapseProps {
  item: NavItemProps;
  nestedLevel: number;
}

// Extend the component's props to include useRouter's properties
type NavVerticalCollapsePropsRouterProps = NavVerticalCollapseProps & ReturnType<typeof useRouter>;

function needsToBeOpened(pathname: any, item: NavItemProps): boolean {
  return pathname && isUrlInChildren(item, pathname);
}

function isUrlInChildren(parent: NavItemProps, url: string): boolean {
  if (!parent.children) {
    return false;
  }

  for (const child of parent.children) {
    if (child.children && isUrlInChildren(child, url)) {
      return true;
    }

    if (child.url === url || url.includes(child.url!)) {
      return true;
    }
  }

  return false;
}

const FuseNavVerticalCollapse: React.FC<NavVerticalCollapsePropsRouterProps> = (props) => {
  const [open, setOpen] = useState<boolean>(() => needsToBeOpened(props.pathname, props.item));
  const { item, nestedLevel } = props;
  useEffect(() => {
    if (needsToBeOpened(props.pathname, props.item) && !open) {
      setOpen(true);
    }
  }, [props.pathname, props.item, open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul className={clsx(open && 'open')}>
      <ListItem
        className="nav-link"
        onClick={handleClick}
        role="button"
      >
        {item.icon && (
          <Icon color="action" className="nav-icon">
            {item.icon}
          </Icon>
        )}
        <ListItemText disableTypography className="nav-link-text " primary={item.title} classes={{ primary: 'text-xs' }} />
        {/* <IconButton
          disableRipple
          className="nav-icon p-0"
          onClick={(ev) => ev.preventDefault()}
        > */}
          
          <Icon fontSize="small" className="nav-icon --right" color="action" onClick={(ev) => ev.preventDefault()}> 
            {open ? 'expand_less' : 'expand_more'}
          </Icon>
        {/* </IconButton> */}
      </ListItem>

      {item.children && (
        <Collapse in={open} className="collapse-children">
          {item.children.map((_item,index) => (
            <NavItem index={index} key={_item.id} type={`vertical-${_item.type}`} item={_item} nestedLevel={nestedLevel + 1} />
          ))}
        </Collapse>
      )}
    </ul>
  );
};

export default React.memo(FuseNavVerticalCollapse);