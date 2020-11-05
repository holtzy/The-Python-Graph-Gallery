import React, { HTMLAttributes, FC } from 'react';
import classnames from 'classnames';

interface KeyTagProps extends HTMLAttributes<HTMLDivElement> {
  mini?: boolean;
}
export const KeyTag: FC<KeyTagProps> = ({ children, mini }) => {
  return (
    <div className={classnames('command-palette-key-tag', { mini: !!mini })}>
      {children}
    </div>
  );
};
