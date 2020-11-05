import React from 'react';
declare type SelectableContextType = (key: string | null, event: any) => void;
declare const SelectableContext: React.Context<SelectableContextType | null>;
export declare const makeEventKey: (eventKey: string | null, href?: string | null) => string | null;
export default SelectableContext;
