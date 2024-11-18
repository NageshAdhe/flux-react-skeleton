import Icon from "@mui/material/Icon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles, useTheme } from "@mui/material/styles";
import clsx from "clsx";
import React, { useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withRouter } from "next/router";
import Link from "next/link";

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
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { item, nestedLevel } = props;

  return (
    <>
      {item.url ? (
             <Link  href={item.url} className={clsx("nav-link")} role="button">
             {item.icon && (
               <Icon fontSize="small" className="nav-icon" color="action">
                 {item.icon}
               </Icon>
             )}
            {item.title}
           </Link>
            ):
            <ListItemText
            disableTypography
            className="nav-link-text"
            primary={item.title}
          />
          }


    </>
  
  );
};

export default React.memo(NavVerticalLink);
