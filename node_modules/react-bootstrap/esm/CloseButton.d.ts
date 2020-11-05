import React from 'react';
export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}
declare const CloseButton: React.ForwardRefExoticComponent<CloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default CloseButton;
