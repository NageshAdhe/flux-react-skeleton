import { ListSubheader, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import NavItem from '../navItem';
import NavLinkAdapter from '../NavLinkAdaptor';


interface FuseNavVerticalGroupProps {
  item: {
    id: string;
    title: string;
    url?: string;
    auth?: string[];
    children?: any[];
  };
  nestedLevel: number;
}

const NavVerticalGroup: React.FC<FuseNavVerticalGroupProps> = (props) => {
  const { item, nestedLevel } = props;
  const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
   <>
   <ListSubheader
				disableSticky
				className={clsx('list-subheader flex items-center', !item.url && 'cursor-default')}				
				component={item.url ? NavLinkAdapter : 'li'}			
				role="button"
			>
				<span className="list-subheader-text uppercase text-12">{item.title}</span>
			</ListSubheader>
			{item.children && (
				<>
					{item.children.map(_item => (
            <>            
						<NavItem
							key={_item.id}
							type={`vertical-${_item.type}`}
							item={_item}
							nestedLevel={nestedLevel}
						/>
            </>
					))}
				</>
			)}
   </>
  );
};

export default NavVerticalGroup;
