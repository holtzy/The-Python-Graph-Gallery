export interface TransitionCallbacks {
  onEnter?(node: HTMLElement, isAppearing: boolean): any;
  onEntered?(node: HTMLElement, isAppearing: boolean): any;
  onEntering?(node: HTMLElement, isAppearing: boolean): any;
  onExit?(node: HTMLElement): any;
  onExited?(node: HTMLElement): any;
  onExiting?(node: HTMLElement): any;
}
