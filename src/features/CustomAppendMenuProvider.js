import { isUndefined } from 'min-dash';
import { CREATE_OPTIONS } from './util/CreateOptionsUtil';

/**
 * This module is an append menu provider for the popup menu.
 */
export default function CustomAppendMenuProvider(
    elementFactory, popupMenu,
    create, autoPlace, rules,
    mouse, translate
) {

  this._elementFactory = elementFactory;
  this._popupMenu = popupMenu;
  this._create = create;
  this._autoPlace = autoPlace;
  this._rules = rules;
  this._create = create;
  this._mouse = mouse;
  this._translate = translate;

  this.register();
}

CustomAppendMenuProvider.$inject = [
  'elementFactory',
  'popupMenu',
  'create',
  'autoPlace',
  'rules',
  'mouse',
  'translate'
];

/**
 * Register append menu provider in the popup menu
 */
CustomAppendMenuProvider.prototype.register = function() {
  this._popupMenu.registerProvider('bpmn-append', this);
};

/**
 * Gets the append options for the given element as menu entries
 *
 * @param {djs.model.Base} element
 *
 * @return {Array<Object>} a list of menu entry items
 */
CustomAppendMenuProvider.prototype.getPopupMenuEntries = function(element) {
  const rules = this._rules;
  const translate = this._translate;

  const entries = {};

  if (!rules.allowed('shape.append', { element: element })) {
    return [];
  }

  // filter out elements with no incoming connections
  const appendOptions = this._filterEntries(CREATE_OPTIONS);

  // map options to menu entries
  appendOptions.forEach(option => {
    const {
      actionName,
      className,
      label,
      target,
      description,
      group,
      search,
      rank
    } = option;

    entries[`append-${actionName}`] = {
      label: label && translate(label),
      className,
      description,
      group: group && {
        ...group,
        name: translate(group.name)
      },
      search,
      rank,
      action: this._createEntryAction(element, target)
    };
  });

  return entries;
};

/**
 * Filter out entries from the options.
 *
 * @param {Array<Object>} entries
 *
 * @return {Array<Object>} filtered entries
 */
CustomAppendMenuProvider.prototype._filterEntries = function(entries) {
  return entries.filter(option => {

    const target = option.target;
    const {
      type,
      eventDefinitionType
    } = target;

    if ([
      'bpmn:StartEvent',
      'bpmn:Participant'
    ].includes(type)) {
      return false;
    }

    if (type === 'bpmn:BoundaryEvent' && isUndefined(eventDefinitionType)) {
      return false;
    }

    return true;
  });
};

/**
 * Create an action for a given target.
 *
 * @param {djs.model.Base} element
 * @param {Object} target
 *
 * @return {Object}
 */
CustomAppendMenuProvider.prototype._createEntryAction = function(element, target) {
  const elementFactory = this._elementFactory;
  const autoPlace = this._autoPlace;
  const create = this._create;
  const mouse = this._mouse;


  const autoPlaceElement = () => {
    const newElement = elementFactory.create('shape', target);
    autoPlace.append(element, newElement);
  };

  const manualPlaceElement = (event) => {
    const newElement = elementFactory.create('shape', target);

    if (event instanceof KeyboardEvent) {
      event = mouse.getLastMoveEvent();
    }

    return create.start(event, newElement, {
      source: element
    });
  };

  return {
    click: this._canAutoPlaceElement(target) ? autoPlaceElement : manualPlaceElement,
    dragstart: manualPlaceElement
  };
};

/**
 * Check if the element should be auto placed.
 *
 * @param {Object} target
 *
 * @return {Boolean}
 */
CustomAppendMenuProvider.prototype._canAutoPlaceElement = (target) => {
  const { type } = target;

  if (type === 'bpmn:BoundaryEvent') {
    return false;
  }

  if (type === 'bpmn:SubProcess' && target.triggeredByEvent) {
    return false;
  }

  if (type === 'bpmn:IntermediateCatchEvent' && target.eventDefinitionType === 'bpmn:LinkEventDefinition') {
    return false;
  }

  return true;
};