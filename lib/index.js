import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import Foo from './Foo';

export default {
  __init__: [ 'contextPadNext', 'contextPadProviderNext', 'foo' ],
  contextPadNext: [ 'type', ContextPad ],
  contextPadProviderNext: [ 'type', ContextPadProvider ],
  foo: [ 'type', Foo ]
};