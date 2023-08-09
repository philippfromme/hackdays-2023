import {
    assign,
    forEach,
    isArray,
    every
  } from 'min-dash';
  
  import {
    is
  } from 'bpmn-js/lib/util/ModelUtil';
  
  import {
    isExpanded,
    isEventSubProcess
  } from 'bpmn-js/lib/util/DiUtil';
  
  import {
    isAny
  } from 'bpmn-js/lib/features/modeling/util/ModelingUtil';
  
  import {
    getChildLanes
  } from 'bpmn-js/lib/features/modeling/util/LaneUtil';
  
  import {
    hasPrimaryModifier
  } from 'diagram-js/lib/util/Mouse';
  
  /**
   * @typedef {import('didi').Injector} Injector
   * @typedef {import('diagram-js/lib/core/EventBus').default} EventBus
   * @typedef {import('diagram-js/lib/features/context-pad/ContextPad').default} ContextPad
   * @typedef {import('../modeling/Modeling').default} Modeling
   * @typedef {import('../modeling/ElementFactory').default} ElementFactory
   * @typedef {import('diagram-js/lib/features/connect/Connect').default} Connect
   * @typedef {import('diagram-js/lib/features/create/Create').default} Create
   * @typedef {import('diagram-js/lib/features/popup-menu/PopupMenu').default} PopupMenu
   * @typedef {import('diagram-js/lib/features/canvas/Canvas').default} Canvas
   * @typedef {import('diagram-js/lib/features/rules/Rules').default} Rules
   * @typedef {import('diagram-js/lib/i18n/translate/translate').default} Translate
   *
   * @typedef {import('../../model/Types').Element} Element
   * @typedef {import('../../model/Types').ModdleElement} ModdleElement
   *
   * @typedef { { } } AppendNodeConfig
   */
  
  /**
   * BPMN-specific append node provider.
   *
   * @param {AppendNodeConfig} config
   * @param {Injector} injector
   * @param {EventBus} eventBus
   * @param {ContextPad} contextPad
   * @param {Modeling} modeling
   * @param {ElementFactory} elementFactory
   * @param {Connect} connect
   * @param {Create} create
   * @param {PopupMenu} popupMenu
   * @param {Canvas} canvas
   * @param {Rules} rules
   * @param {Translate} translate
   */
  export default function AppendNodeProvider(
      config, injector, eventBus,
      appendNode, modeling, elementFactory,
      connect, create, popupMenu,
      canvas, rules, translate) {
  
    config = config || {};
  
    appendNode.registerProvider(this);
  
    this._appendNode = appendNode;
  
    this._modeling = modeling;
  
    this._elementFactory = elementFactory;
    this._connect = connect;
    this._create = create;
    this._popupMenu = popupMenu;
    this._canvas = canvas;
    this._rules = rules;
    this._translate = translate;
  
    /*
    if (config.autoPlace !== false) {
      this._autoPlace = injector.get('autoPlace', false);
    }
    */
  
    eventBus.on('create.end', 250, function(event) {
      var context = event.context,
          shape = context.shape;
  
      if (!hasPrimaryModifier(event) || !appendNode.isShown(shape)) {
        return;
      }
  
      /*
      var entries = appendNode.getEntries(shape);
  
      if (entries.replace) {
        entries.replace.action.click(event, shape);
      }
      */
    });
  }
  
  AppendNodeProvider.$inject = [
    'config.appendNode',
    'injector',
    'eventBus',
    'appendNode',
    'modeling',
    'elementFactory',
    'connect',
    'create',
    'popupMenu',
    'canvas',
    'rules',
    'translate'
  ];