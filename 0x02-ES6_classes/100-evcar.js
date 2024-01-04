import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
