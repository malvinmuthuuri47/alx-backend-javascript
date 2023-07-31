export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw Error('Please pass in a valid number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
