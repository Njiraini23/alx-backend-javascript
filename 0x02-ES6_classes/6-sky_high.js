import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Calling the parent class constructor using super()
    super(sqft);

    this._floors = floors;
  }

  // Getter methods
  get floors() {
    return this._floors;
  }

  // Overide evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
