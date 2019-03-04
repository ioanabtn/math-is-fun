function run() {
	
	var first_operand = document.getElementById('first').value;
	var second_operand = document.getElementById('second').value;
	var third_operand = document.getElementById('third').value;
	var fourth_operand = document.getElementById('fourth').value;

	if (isInteger(first_operand) && isInteger(second_operand) && isInteger(third_operand) && isInteger(fourth_operand)) {
		var result = parseInt(first_operand) + parseInt(second_operand) + parseInt(third_operand)  * parseInt(fourth_operand) ;
		document.querySelectorAll('span')[1].innerHTML = parseInt(result);
		document.querySelectorAll('span')[0].innerHTML = 'no error';
	} else {
		document.querySelectorAll('span')[0].innerHTML = 'It seems like at least one of your operand is not an integer number or begins with a zero';
		document.querySelectorAll('span')[1].innerHTML = 'no result';
	}
	
}

function isInteger(number) {
	var regex = /^([+-]?[1-9]\d*|0)$/;
	return number.match(regex);
}

