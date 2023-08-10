import AppendNode from './AppendNode';
import AppendNodeProvider from './AppendNodeProvider';
import BoundaryEventAppender from './BoundaryEventAppender';
import BoundaryEventAppenderProvider from './BoundaryEventAppenderProvider';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import {
  CreateAppendAnythingModule
} from 'bpmn-js-create-append-anything';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNode', 'appendNodeProvider', 'boundaryEventAppender', 'boundaryEventAppenderProvider' ],
  __depends__: [ CreateAppendAnythingModule ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNode: [ 'type', AppendNode ],
  appendNodeProvider: [ 'type', AppendNodeProvider ],
  boundaryEventAppender: [ 'type', BoundaryEventAppender ],
  boundaryEventAppenderProvider: [ 'type', BoundaryEventAppenderProvider ],
  appendContextPadProvider: [ 'value', null ]
};
