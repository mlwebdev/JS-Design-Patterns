// Prototype-Pattern.js
var carProto = function() {}

carProto.prototype.year = "";
carProto.prototype.paint = "";
carProto.prototype.make = "";
carProto.prototype.model = "";

carProto.prototype.showCar = function() {
  console.log(`${this.year} ${this.paint} ${this.make} ${this.model}`);
}
var car1 = new carProto();
car1.year = "2017";
car1.paint = "Black";
car1.make = "Lincoln";
car1.model = "Continental";
car1.showCar();
