// Factory-Pattern.js
var CarFactory = function(year, paint, make, model) {
  var car = {};
  car.year = year;
  car.paint = paint;
  car.make = make;
  car.model = model;
  /* Function that output properties */
  car.showCar = function() {
    console.log(`${this.year} ${this.paint} ${this.make} ${this.model}`);
  }
  return car;
}
var car1 = CarFactory("2017", "Black", "Lincoln", "Continental");
car1.showCar();
