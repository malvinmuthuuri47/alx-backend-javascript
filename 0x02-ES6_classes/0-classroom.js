export default class ClassRoom {
	constructor(maxStudentsSize) {
		this.maxStudentsSize = maxStudentsSize;
	}

	get _maxStudentsSize() {
		return this.maxStudentsSize;
	}
}
