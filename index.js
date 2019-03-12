/*
	Ioana Bostan 03/05/2019
*/

function run() {
	//constants for info messages
	const ERROR_MSG = "Invalid input";
	const RESULT_INFO = "No result";
	const ERROR_INFO = "No error";

	const inputContainer = document.getElementsByClassName("row mt-5")[0].getElementsByClassName("col");
	const spans = document.querySelectorAll('span')
	
	var operands = [];

	//I collected operands as they come
	for (var i = 0; i < inputContainer.length; i += 2) {
		operands.push(inputContainer[i].getElementsByTagName("input")[0].value)
	}

	const intOperands = operands.map(operand => parseInt(operand));

	//check if input can be converted to an integer number
	const isInteger = (operand) => {
		return Number.isInteger(+operand);
	}

	//check if some NaN had passed
	const isNotNaN = (operand) => {
		return !isNaN(operand);
	}

	if (operands.every(isInteger)) {
		if (intOperands.every(isNotNaN)) {
			result = intOperands[0] + intOperands[1] + intOperands[2]  * intOperands[3];
			spans[1].innerHTML = result;
			spans[0].innerHTML = ERROR_INFO;
		} else { //when one of your input is 1 or more spaces
			spans[0].innerHTML = ERROR_MSG;
			spans[1].innerHTML = RESULT_INFO;
		}
	} else {
		spans[0].innerHTML = ERROR_MSG;
		spans[1].innerHTML = RESULT_INFO;
	}
}



