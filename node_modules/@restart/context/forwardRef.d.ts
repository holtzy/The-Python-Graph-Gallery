// TypeScript Version: 3.0

declare module '@restart/context/forwardRef' {
  import * as React from 'react';

  interface ForwardRefOptions<TProps> {
    displayName?: string;
    propTypes?: React.ValidationMap<TProps>;
    defaultProps?: Partial<TProps>;
    allowFallback?: boolean;
  }

  function forwardRef<TRef, TProps>(
    renderFn: (
      props: TProps & { children?: React.ReactNode },
      ref: React.Ref<TRef> | null,
    ) => React.ReactElement<any> | null,
    options?: ForwardRefOptions<TProps>,
  ): React.ForwardRefExoticComponent<
    React.PropsWithRef<TProps> & React.RefAttributes<TRef>
  >;

  export default forwardRef;
}
