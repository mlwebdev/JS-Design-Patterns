// Constructor-Pattern.js
var CarConstructor = function(year, paint, make, model) {
  this.year = year;
  this.paint = paint;
  this.make = make;
  this.model = model;
  /* Function that output properties */
  this.showCar = function() {
    console.log(`${this.year} ${this.paint} ${this.make} ${this.model}`);
  }
}
var car1 = new CarConstructor("2017", "Black", "Lincoln", "Continental");
car1.showCar();
