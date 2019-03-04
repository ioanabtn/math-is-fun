function run() {
	
	first_operand = document.getElementById('first').value;
	second_operand = document.getElementById('second').value;
	third_operand = document.getElementById('third').value;
	fourth_operand = document.getElementById('fourth').value;

	if (isInteger(first_operand) && isInteger(second_operand) && isInteger(third_operand) && isInteger(fourth_operand)) {
		result = parseInt(first_operand) + parseInt(second_operand) + parseInt(third_operand)  * parseInt(fourth_operand) ;
		document.querySelectorAll('span')[1].innerHTML = parseInt(result);
		document.querySelectorAll('span')[0].innerHTML = 'no error';
	} else {
		document.querySelectorAll('span')[0].innerHTML = 'It seems like at least one of your operand is not an integer number or begins with a zero';
		document.querySelectorAll('span')[1].innerHTML = 'no result';
	}
	
}

function isInteger(number) {
	var regex = /^(\s?[+-]?[1-9]\d*\s?|0)$/;
	return number.match(regex);
}

