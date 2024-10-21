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
        className={clsx("classes.item", 'list-item')}
        onClick={handleClick}
        role="button"
      >
        {item.icon && (
          <Icon color="action" className="list-item-icon text-16 flex-shrink-0">
            {item.icon}
          </Icon>
        )}
        <ListItemText className="list-item-text" primary={item.title} classes={{ primary: 'text-14' }} />
        <IconButton
          disableRipple
          className="w-40 h-40 -mx-12 p-0 focus:bg-transparent hover:bg-transparent"
          onClick={(ev) => ev.preventDefault()}
        >
          <Icon className="text-16 arrow-icon" color="inherit">
            {open ? 'expand_less' : 'expand_more'}
          </Icon>
        </IconButton>
      </ListItem>

      {item.children && (
        <Collapse in={open} className="collapse-children">
          {item.children.map((_item) => (
            <NavItem key={_item.id} type={`vertical-${_item.type}`} item={_item} nestedLevel={nestedLevel + 1} />
          ))}
        </Collapse>
      )}
    </ul>
  );
};

export default React.memo(FuseNavVerticalCollapse);