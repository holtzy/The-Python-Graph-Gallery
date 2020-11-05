import React from 'react';
interface ModalContextType {
    onHide: () => void;
}
declare const ModalContext: React.Context<ModalContextType>;
export default ModalContext;
