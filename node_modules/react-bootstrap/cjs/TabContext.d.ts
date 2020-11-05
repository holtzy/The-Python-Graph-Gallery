import React from 'react';
export interface TabContextType {
    onSelect: any;
    activeKey: any;
    transition: any;
    mountOnEnter: boolean;
    unmountOnExit: boolean;
    getControlledId: (key: any) => any;
    getControllerId: (key: any) => any;
}
declare const TabContext: React.Context<TabContextType | null>;
export default TabContext;
