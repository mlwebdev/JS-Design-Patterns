// Dynamic-Prototype-Pattern.js
var carDynamicProto = function (year, paint, make, model) {	
	this.year = year;
	this.paint = paint;
	this.make = make;
	this.model = model;

	if ( typeof this.showCar != 'function') {
		carDynamicProto.prototype.showCar = function() {
			console.log( `${this.year} ${this.paint} ${this.make} ${this.model}` );
		}   
	}
};   
var car1 = new carDynamicProto("2017", "Black", "Lincoln", "Continental");
car1.showCar();
