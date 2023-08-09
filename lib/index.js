import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import Foo from './Foo';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'foo' ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  foo: [ 'type', Foo ]
};