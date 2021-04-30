import { Destructible } from 'baseType';
import { DemosManager } from 'comp/index/DemosManager';

const classDemosManager = 'index';
const indexes: Destructible[] = Array
  .from(document.querySelectorAll<HTMLDivElement>(`.${classDemosManager}`))
  .map((element) => new DemosManager(element, classDemosManager));

export { indexes };
