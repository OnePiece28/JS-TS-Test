let marks = [10,20,30,40,50];
let increaseMarks = function (marks) {
	return marks.map(function(mark){
        return mark + 10;
    });
};
console.log(increaseMarks(marks))