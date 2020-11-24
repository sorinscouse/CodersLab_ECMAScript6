class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  area() {
      return this.height * this.width;
  }

  sayName() {
    console.log('Hi, I am ', this.name + '.');
  }
}
