import AppendNode from './AppendNode';
import AppendNodeProvider from './AppendNodeProvider';
import BoundaryEventAppender from './BoundaryEventAppender';
import BoundaryEventAppenderProvider from './BoundaryEventAppenderProvider';
import ContextPad from './ContextPad';
import ContextPadProvider from './ContextPadProvider';
import { CreateAppendAnythingModule } from 'bpmn-js-create-append-anything';
import CustomAppendMenuProvider from './CustomAppendMenuProvider';
import AppendPreview from 'bpmn-js/lib/features/append-preview/AppendPreview';
import Connect from './Connect';

export default {
  __init__: [ 'contextPad', 'contextPadProvider', 'appendNode', 'appendNodeProvider', 'boundaryEventAppender', 'boundaryEventAppenderProvider', 'appendMenuProvider', 'appendPreview', 'connect' ],
  __depends__: [ CreateAppendAnythingModule ],
  contextPad: [ 'type', ContextPad ],
  contextPadProvider: [ 'type', ContextPadProvider ],
  appendNode: [ 'type', AppendNode ],
  appendNodeProvider: [ 'type', AppendNodeProvider ],
  boundaryEventAppender: [ 'type', BoundaryEventAppender ],
  boundaryEventAppenderProvider: [ 'type', BoundaryEventAppenderProvider ],
  appendMenuProvider: [ 'type', CustomAppendMenuProvider ],
  appendContextPadProvider: [ 'value', null ],
  appendPreview: [ 'type', AppendPreview ],
  connect: [ 'type', Connect ]
};
