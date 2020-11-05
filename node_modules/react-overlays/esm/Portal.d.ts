import PropTypes from 'prop-types';
import React from 'react';
import { DOMContainer } from './useWaitForDOMRef';
export interface PortalProps {
    children: React.ReactElement;
    container: DOMContainer;
    onRendered?: (element: any) => void;
}
/**
 * @public
 */
declare const Portal: {
    ({ container, children, onRendered }: PortalProps): JSX.Element | null;
    displayName: string;
    propTypes: {
        /**
         * A DOM element, Ref to an element, or function that returns either. The `container` will have the Portal children
         * appended to it.
         */
        container: PropTypes.Requireable<any>;
        onRendered: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default Portal;
