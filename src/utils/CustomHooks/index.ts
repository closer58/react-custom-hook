import useClickAway from './Dom/useClickAway';
import useClickOutside from './Dom/useClickOutside';
import useCheckboxBind from './Bind/useCheckboxBind';
import useDrag from './Draggable/useDrag';
import useDrop, { DropAreaOptions } from './Draggable/useDrop';
import useDebounce from './Debounce&Throttle/useDebounce';
import useDebounceFn from './Debounce&Throttle/useDebounceFn';
import useDocumentEvent from './toolHooks/useDocumentEvent';
import { Emitter, useEventEmitter } from './State/useEventEmitter';
import useHistory from './State/useHistory';
import useInterval from './Timer/useInterval';
import useInputBind, { Result } from './Bind/useInputBind';
import useKeyPress from './Dom/useKeyPress';
import useSize, { Size } from './Observer/useSize';
import useScroll from './Scroll/useScroll';
import useThrottle from './Debounce&Throttle/useThrottle';
import useThrottleFn from './Debounce&Throttle/useThrottleFn';
import useTextSelection, { IState } from './Bind/useTextSelection';
import useVirtualList, { OptionType } from './RenderPerformance/useVirtualList';

export type { DropAreaOptions, IState, OptionType, Result, Size };

export { Emitter };

export {
  useClickAway,
  useClickOutside,
  useCheckboxBind,
  useDrag,
  useDrop,
  useDebounce,
  useDebounceFn,
  useDocumentEvent,
  useEventEmitter,
  useHistory,
  useInterval,
  useInputBind,
  useKeyPress,
  useSize,
  useScroll,
  useThrottle,
  useThrottleFn,
  useTextSelection,
  useVirtualList
};
