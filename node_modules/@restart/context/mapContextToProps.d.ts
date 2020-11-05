// TypeScript Version: 3.0

declare module '@restart/context/mapContextToProps' {
  import * as React from 'react';

  type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

  type GetProps<C> = C extends React.ComponentType<infer P> ? P : never;

  export interface ContextInjectedComponent<
    TComponent,
    TInjectedProps,
    TExtraProps
  >
    extends React.ForwardRefExoticComponent<
        Omit<GetProps<TComponent>, TInjectedProps> & TExtraProps
      > {}

  // Single Context
  function mapContextToProps<TComponent, TContext, TContextProps, TOwnProps>(
    context: React.Context<TContext> | [React.Context<TContext>],
    mapToProps: (ctxValue: TContext, props: TOwnProps) => TContextProps,
    Component: TComponent,
  ): ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;
  function mapContextToProps<TContext, TContextProps, TOwnProps>(
    context: React.Context<TContext> | [React.Context<TContext>],
    mapToProps: (ctxValue: TContext, props: TOwnProps) => TContextProps,
  ): <TComponent>(
    component: TComponent,
  ) => ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;

  // 2 Contexts
  function mapContextToProps<
    TComponent,
    TContext1,
    TContext2,
    TContextProps,
    TOwnProps
  >(
    context: [React.Context<TContext1>, React.Context<TContext2>],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      props: TOwnProps,
    ) => TContextProps,
    Component: TComponent,
  ): ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;
  function mapContextToProps<TContext1, TContext2, TContextProps, TOwnProps>(
    context: [React.Context<TContext1>, React.Context<TContext2>],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      props: TOwnProps,
    ) => TContextProps,
  ): <TComponent>(
    component: TComponent,
  ) => ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;

  // 3 Contexts
  function mapContextToProps<
    TComponent,
    TContext1,
    TContext2,
    TContext3,
    TContextProps,
    TOwnProps
  >(
    context: [
      React.Context<TContext1>,
      React.Context<TContext2>,
      React.Context<TContext3>
    ],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      c3: TContext3,
      props: TOwnProps,
    ) => TContextProps,
    Component: TComponent,
  ): ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;
  function mapContextToProps<
    TContext1,
    TContext2,
    TContext3,
    TContextProps,
    TOwnProps
  >(
    context: [
      React.Context<TContext1>,
      React.Context<TContext2>,
      React.Context<TContext3>
    ],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      c3: TContext3,
      props: TOwnProps,
    ) => TContextProps,
  ): <TComponent>(
    component: TComponent,
  ) => ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;

  // 4 Contexts
  function mapContextToProps<
    TComponent,
    TContext1,
    TContext2,
    TContext3,
    TContext4,
    TContextProps,
    TOwnProps
  >(
    context: [
      React.Context<TContext1>,
      React.Context<TContext2>,
      React.Context<TContext3>,
      React.Context<TContext4>
    ],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      c3: TContext3,
      c4: TContext4,
      props: TOwnProps,
    ) => TContextProps,
    Component: TComponent,
  ): ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;
  function mapContextToProps<
    TContext1,
    TContext2,
    TContext3,
    TContext4,
    TContextProps,
    TOwnProps
  >(
    context: [
      React.Context<TContext1>,
      React.Context<TContext2>,
      React.Context<TContext3>,
      React.Context<TContext4>
    ],
    mapToProps: (
      c1: TContext1,
      c2: TContext2,
      c3: TContext3,
      c4: TContext4,
      props: TOwnProps,
    ) => TContextProps,
  ): <TComponent>(
    component: TComponent,
  ) => ContextInjectedComponent<TComponent, TContextProps, TOwnProps>;

  export default mapContextToProps;
}
