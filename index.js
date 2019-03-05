/*
	Ioana Bostan 03/05/2019
*/

function run() {
	//constants for info messages
	const ERROR_MSG = "Invalid input";
	const RESULT_INFO = "No result";
	const ERROR_INFO = "No error";

	const row_mt5 = document.getElementsByClassName("row mt-5");
	const col = row_mt5[0].getElementsByClassName("col");
	const spans = document.querySelectorAll('span')
	
	var operands = [];

	//I collected operands as they come
	for (var i = 0; i < col.length; i += 2) {
		operands.push(col[i].getElementsByTagName("input")[0].value)
	}

	const int_operands = operands.map(operand => parseInt(operand));

	//check if input can be converted to an integer number
	const isInteger = (operand) => {
		return Number.isInteger(+operand);
	}

	//check if some NaN had passed
	const isNotNaN = (operand) => {
		return !isNaN(operand);
	}

	if (operands.every(isInteger)) {
		if (int_operands.every(isNotNaN)) {
			result = int_operands[0] + int_operands[1] + int_operands[2]  * int_operands[3];
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



