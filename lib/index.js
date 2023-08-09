import AppendNode from './AppendNode';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import Foo from './Foo';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNode', 'foo' ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNode: [ 'type', AppendNode ],
  foo: [ 'type', Foo ]
};