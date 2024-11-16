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
  index?:number;
  nestedLevel: number;
}

const NavVerticalGroup: React.FC<FuseNavVerticalGroupProps> = (props) => {
  const { item, nestedLevel,index} = props;
  const theme = useTheme();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
   <>
   <ListSubheader
				disableSticky
				// className={clsx('nav-list-sub-header', !item.url && 'cursor-default flex-1', index!=0 && 'my-3')}
				className={clsx('nav-list-sub-header', index!=0 && 'my-3')}
				component={item.url ? NavLinkAdapter : 'li'}			
				role="button"
			>
				<div className="nav-list-sub-header-text">
				<span className="--primary">{item.title}</span>
				<p className="--secondary">Custom made application designs</p>
				</div>
				
			</ListSubheader>
			{item.children && (
				<>
					{item.children.map((_item,index) => (
            <>            
						<NavItem
						    index={index}
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
