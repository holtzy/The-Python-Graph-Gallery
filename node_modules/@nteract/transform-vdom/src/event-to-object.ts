import * as React from "react";

export type SerializedEvent<T> =
  | Partial<React.ClipboardEvent<T>>
  | Partial<React.CompositionEvent<T>>
  | Partial<React.KeyboardEvent<T>>
  | Partial<React.ChangeEvent<T>>
  | Partial<React.MouseEvent<T>>
  | Partial<React.PointerEvent<T>>
  | Partial<React.TouchEvent<T>>
  | Partial<React.UIEvent<T>>
  | Partial<React.WheelEvent<T>>
  | Partial<React.AnimationEvent<T>>
  | Partial<React.TransitionEvent<T>>
  | {};

export function serializeEvent<T>(
  event: React.SyntheticEvent<T>
): SerializedEvent<T> {
  switch (event.type) {
    // Clipboard events
    case "copy":
    case "cut":
    case "paste":
      const clipboardEvent = event as React.ClipboardEvent<T>;
      return { clipboardData: clipboardEvent.clipboardData };
    // Composition events
    case "compositionend":
    case "compositionstart":
    case "compositionupdate":
      const compositionEvent = event as React.CompositionEvent<T>;
      return { data: compositionEvent.data };
    // Keyboard events
    case "keydown":
    case "keypress":
    case "keyup":
      const keyboardEvent = event as React.KeyboardEvent<T>;
      return {
        altKey: keyboardEvent.altKey,
        charCode: keyboardEvent.charCode,
        ctrlKey: keyboardEvent.ctrlKey,
        key: keyboardEvent.key,
        keyCode: keyboardEvent.keyCode,
        locale: keyboardEvent.locale,
        location: keyboardEvent.location,
        metaKey: keyboardEvent.metaKey,
        repeat: keyboardEvent.repeat,
        shiftKey: keyboardEvent.shiftKey,
        which: keyboardEvent.which
      };
    // Focus events
    case "focus":
    case "blur":
      return {};
    // Form events
    case "change":
    case "input":
    case "invalid":
    case "submit":
      const formEvent = event as React.ChangeEvent<T>;
      return { value: (formEvent.target as any).value };
    // Mouse events
    case "click":
    case "contextmenu":
    case "doubleclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
    case "mousedown":
    case "mouseenter":
    case "mouseleave":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "mouseup":
      const mouseEvent = event as React.MouseEvent<T>;
      return {
        altKey: mouseEvent.altKey,
        button: mouseEvent.button,
        buttons: mouseEvent.buttons,
        clientX: mouseEvent.clientX,
        clientY: mouseEvent.clientY,
        ctrlKey: mouseEvent.ctrlKey,
        metaKey: mouseEvent.metaKey,
        pageX: mouseEvent.pageX,
        pageY: mouseEvent.pageY,
        screenX: mouseEvent.screenX,
        screenY: mouseEvent.screenY,
        shiftKey: mouseEvent.shiftKey
      };
    // Pointer events
    case "pointerdown":
    case "pointermove":
    case "pointerup":
    case "pointercancel":
    case "gotpointercapture":
    case "lostpointercapture":
    case "pointerenter":
    case "pointerleave":
    case "pointerover":
    case "pointerout":
      const pointerEvent = event as React.PointerEvent<T>;
      return {
        pointerId: pointerEvent.pointerId,
        width: pointerEvent.width,
        height: pointerEvent.height,
        pressure: pointerEvent.pressure,
        tiltX: pointerEvent.tiltX,
        tiltY: pointerEvent.tiltY,
        pointerType: pointerEvent.pointerType,
        isPrimary: pointerEvent.isPrimary
      };
    // Selection events
    case "select":
      return {};
    // return {value: selectEvent.target.value};
    // Touch events
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
      const touchEvent = event as React.TouchEvent<T>;
      return {
        altKey: touchEvent.altKey,
        ctrlKey: touchEvent.ctrlKey,
        metaKey: touchEvent.metaKey,
        shiftKey: touchEvent.shiftKey
      };
    // UI events
    case "scroll":
      const uiEvent = event as React.UIEvent<T>;
      return { detail: uiEvent.detail };
    // Wheel events
    case "wheel":
      const wheelEvent = event as React.WheelEvent<T>;
      return {
        deltaMode: wheelEvent.deltaMode,
        deltaX: wheelEvent.deltaX,
        deltaY: wheelEvent.deltaY,
        deltaZ: wheelEvent.deltaZ
      };
    // Media events
    case "abort":
    case "canplay":
    case "canplaythrough":
    case "durationchange":
    case "emptied":
    case "encrypted":
    case "ended":
    case "error":
    case "loadeddata":
    case "loadedmetadata":
    case "loadstart":
    case "pause":
    case "play":
    case "playing":
    case "progress":
    case "ratechange":
    case "seeked":
    case "seeking":
    case "stalled":
    case "suspend":
    case "timeupdate":
    case "volumechange":
    case "waiting":
      return {};
    // Image events
    case "load":
    case "error":
      return {};
    // Animation events
    case "animationstart":
    case "animationend":
    case "animationiteration":
      const animationEvent = event as React.AnimationEvent<T>;
      return {
        animationName: animationEvent.animationName,
        pseudoElement: animationEvent.pseudoElement,
        elapsedTime: animationEvent.elapsedTime
      };
    // Transition events
    case "transitionend":
      const transitionEvent = event as React.TransitionEvent<T>;
      return {
        propertyName: transitionEvent.propertyName,
        pseudoElement: transitionEvent.pseudoElement,
        elapsedTime: transitionEvent.elapsedTime
      };
    // Other events
    case "toggle":
      return {};
    default:
      return {};
  }
}
