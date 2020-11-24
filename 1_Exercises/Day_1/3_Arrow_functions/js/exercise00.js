var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {

}

var students = new Students(["Mary", "Al", "Gregory"]);
students.countLetters();
console.log(students.numberOfLetters);
