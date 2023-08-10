import AppendNode from './AppendNode';
import AppendNodeProvider from './AppendNodeProvider';
import BoundaryEventAppender from './BoundaryEventAppender';
import BoundaryEventAppenderProvider from './BoundaryEventAppenderProvider';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import {
  CreateAppendAnythingModule
} from 'bpmn-js-create-append-anything';
import CustomAppendMenuProvider from './CustomAppendMenuProvider';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNode', 'appendNodeProvider', 'boundaryEventAppender', 'boundaryEventAppenderProvider', 'appendMenuProvider' ],
  __depends__: [ CreateAppendAnythingModule ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNode: [ 'type', AppendNode ],
  appendNodeProvider: [ 'type', AppendNodeProvider ],
  boundaryEventAppender: [ 'type', BoundaryEventAppender ],
  boundaryEventAppenderProvider: [ 'type', BoundaryEventAppenderProvider ],
  appendMenuProvider: [ 'type', CustomAppendMenuProvider ],
  appendContextPadProvider: [ 'value', null ]
};
