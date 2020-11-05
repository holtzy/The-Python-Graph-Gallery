import React from 'react';
interface NavContextType {
    role?: string;
    activeKey: any;
    getControlledId: (key: any) => any;
    getControllerId: (key: any) => any;
}
declare const NavContext: React.Context<NavContextType | null>;
export default NavContext;
