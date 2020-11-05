import React from 'react';
export interface NavbarContextType {
    onToggle: () => void;
    bsPrefix?: string;
    expanded: boolean;
}
declare const context: React.Context<NavbarContextType | null>;
export default context;
