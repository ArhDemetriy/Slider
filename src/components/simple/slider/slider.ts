import { Destructible } from 'baseType';

class Slider implements Destructible {
  moveRight() {
    this.moveBar(5);
  }

  moveLeft() {
    this.moveBar(-5);
  }

  destroy() {
    this.removeEventsListeners();
    this.destructible.forEach((elem) => elem.destroy());
  }

  protected readonly destructible: Destructible[] = [];

  constructor(mainElement: HTMLElement, mainClass: string = 'slider') {
    this.mainElement = mainElement;
    this.bar = this.mainElement.querySelector(`.${mainClass}__bar`);
    this.initComponents();
    this.addEventsListeners();
  }

  protected readonly mainElement: HTMLElement;

  protected readonly bar: HTMLDivElement;

  protected initComponents() {
    this.barPosition = 33;
  }

  protected moveBar(x: number) {
    this.barPosition += x;
  }

  private _barPosition = 0;

  protected get barPosition() {
    return this._barPosition;
  }

  protected set barPosition(x) {
    this._barPosition = x;
    this.mainElement.style.setProperty('--barPosition', this._barPosition.toString());
  }

  protected removeEventsListeners() {
    this.mainElement.removeEventListener('mousedown', this.bindedMainMouseOn);
    this.mainElement.removeEventListener('mouseup', this.bindedMainMouseOff);
  }

  protected addEventsListeners() {
    this.mainElement.addEventListener('mousedown', this.bindedMainMouseOn, { passive: true });
    this.mainElement.addEventListener('mouseup', this.bindedMainMouseOff, { passive: true });
  }

  protected width: number;

  protected start: number;

  protected min: number;

  protected max: number;

  protected readonly bindedMainMouseOn = this.mainMouseOn.bind(this);

  protected mainMouseOn(ev: MouseEvent) {
    this.width = Number.parseInt(window.getComputedStyle(this.mainElement).width, 10);
    this.min = Math.floor(this.mainElement.getBoundingClientRect().left);
    this.max = this.min + this.width;

    this.start = ev.pageX;
    document.addEventListener('mousemove', this.bindedMainMouseMove, { passive: true });
    document.addEventListener('mouseup', this.bindedMainMouseOff, { passive: true, once: true });
  }

  protected readonly bindedMainMouseOff = this.mainMouseOff.bind(this);

  protected mainMouseOff(ev: MouseEvent) {
    document.removeEventListener('mousemove', this.bindedMainMouseMove);
  }

  protected readonly bindedMainMouseMove = this.mainMouseMove.bind(this);

  protected mainMouseMove(ev: MouseEvent) {
    // оптимизация:
    // т.к.событие происходит очень часто => минимум доп констант.
    // и this.barPosition геттерится только 1 раз.
    // если убрать selfX то мы поменяем 1 сумму на два разименования указателя.
    const selfX = ev.pageX - this.min;
    if (selfX > this.width) {
      if (this.barPosition <= 100) { this.barPosition = 100; }
    } else if (selfX < 0) {
      if (this.barPosition >= 0) { this.barPosition = 0; }
    } else {
      this.barPosition = selfX / (this.width / 100);
    }
  }
}

export {
  Slider
};
