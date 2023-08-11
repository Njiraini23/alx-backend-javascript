export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // The value methods
  valueOf() {
    return this._size;
  }
  // The custom string methods
  toString() {
    return this._location;
  }
}
export default HolbertonClass;
