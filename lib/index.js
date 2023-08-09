import AppendNode from './AppendNode';
import AppendNodeProvider from './AppendNodeProvider';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import {
  CreateAppendAnythingModule
} from 'bpmn-js-create-append-anything';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNode', 'appendNodeProvider' ],
  __depends__: [ CreateAppendAnythingModule ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNode: [ 'type', AppendNode ],
  appendNodeProvider: [ 'type', AppendNodeProvider ],
  appendContextPadProvider: [ 'value', null ]
};
