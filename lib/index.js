import AppendNodes from './AppendNodes';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import Foo from './Foo';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNodes', 'foo' ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNodes: [ 'type', AppendNodes ],
  foo: [ 'type', Foo ]
};