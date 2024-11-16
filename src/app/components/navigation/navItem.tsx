import React from 'react';

type ComponentType = React.ComponentType<any>;

interface ComponentsMap {
    [key: string]: ComponentType;
}

const components: ComponentsMap = {};

export function registerComponent(name: string, Component: ComponentType): void {
    components[name] = Component;
}

interface NavItemProps {
    index:number,
    type: string;
    [key: string]: any; // Allow any additional props
}

export default function NavItem(props: NavItemProps) {
    const C = components[props.type];
    return C ? <C {...props} /> : null;
}