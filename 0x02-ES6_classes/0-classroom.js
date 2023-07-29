export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get _maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
