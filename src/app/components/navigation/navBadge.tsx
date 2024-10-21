import { makeStyles } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme: { palette: { secondary: { main: any; contrastText: any; }; }; }) => ({
    root: {
        padding: '0 7px',
        fontSize: 11,
        fontWeight: 600,
        height: 20,
        minWidth: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}));

interface BadgeProps {
    title: React.ReactNode;
    bg: string;
    fg: string;
}

interface NavBadgeProps {
    className?: string;
    badge: BadgeProps;
}

function NavBadge(props: NavBadgeProps) {
    // const classes = useStyles(props);
    const { className, badge } = props;

    return (
        <div
            // className={clsx(classes.root, className, 'item-badge')}
            style={{
                backgroundColor: badge.bg,
                color: badge.fg
            }}
        >
            {badge.title}
        </div>
    );
}

export default React.memo(NavBadge);
