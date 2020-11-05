import PropTypes from 'prop-types';
import React from 'react';
export interface ThemeProviderProps {
    prefixes: Record<string, unknown>;
}
declare const Consumer: React.Consumer<{}>;
declare function ThemeProvider({ prefixes, children }: {
    prefixes: any;
    children: any;
}): JSX.Element;
declare namespace ThemeProvider {
    var propTypes: {
        prefixes: PropTypes.Validator<object>;
    };
}
export declare function useBootstrapPrefix(prefix: string | undefined, defaultPrefix: string): string;
declare function createBootstrapComponent(Component: any, opts: any): React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export { createBootstrapComponent, Consumer as ThemeConsumer };
export default ThemeProvider;
