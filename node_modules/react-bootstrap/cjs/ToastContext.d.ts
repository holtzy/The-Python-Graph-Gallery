import React from 'react';
export interface ToastContextType {
    onClose?: (e: Event) => void;
}
declare const ToastContext: React.Context<ToastContextType>;
export default ToastContext;
