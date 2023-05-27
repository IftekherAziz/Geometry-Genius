/* --------------------------------------------------------------------------------------------------- */
/**
 * This function create a table row with the given parameters and appends it to the table body.
 * @param dynamicID - This is the ID of the row.
 * @param title - The title of the area.
 * @param total - the total area of the shape
 */
/* ----------------------------------- Area Calculation Function ------------------------------------- */

let dynamicID = 0;
function areaCalculation(dynamicID, title, total) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class='text-xs'>${dynamicID}</td>
    <td class='text-xs'>${title}</td>
    <td class='text-xs'>${total}<span>cm<sup>2</sup></span></td>
    <td><a class="btn btn-info btn-sm text-xs text-white normal-case">Convert to m <sup>2</sup></a></td>
    `;
  container.appendChild(tr);
}

/* ---------------------------------------------------------------------------------------------------- */
/**
 * The function takes an id as an argument, gets the value of the input field with that id, parses the
 * value to a number, and returns the number.
 * @param id - the id of the input field
 * @returns The value of the input field.
 */
/* --------------------------------- Function For Getting InputField --------------------------------- */

function inputFieldValue(id) {
  const inputValue = document.getElementById(id);
  const inputValueString = inputValue.value;
  const inputValueNumber = parseFloat(inputValueString);
  inputValue.value = "";
  return inputValueNumber;
}

/* ---------------------------------------------------------------------------------------------------- */
/**
 * The function elementFieldValue takes an id as an argument and returns the value of the element with
 * that id as a number.
 * @param id - the id of the element which we want to get the value of
 * @returns The value of the element with the id that is passed to the function.
 */
/* ------------------------------- Function For Getting Element Text --------------------------------- */

function elementFieldValue(id) {
  const elementValue = document.getElementById(id);
  const elementValueString = elementValue.innerText;
  const elementValueNumber = parseFloat(elementValueString);
  return elementValueNumber;
}

/* ---------------------------------------------------------------------------------------------------- */
/**
 * It takes two numbers as arguments, multiplies them together with 0.5 and returns
 * the result as a string with two decimal places.
 * @param firstValue - The value of the first input field.
 * @param secondValue - The value of the second input field.
 * @returns The result of the multiplication of the two values with 0.5
 */
/* ----------------------------------- Function For Multiplication ------------------------------------ */

function multiplication1(firstValue, secondValue) {
  const resultMul = 0.5 * firstValue * secondValue;
  const result = resultMul.toFixed(2);
  return result;
}

/* ----------------------------------------------------------------------------------------------------- */
/**
 * The function takes two numbers as arguments, multiplies them, and returns the result as a string
 * with two decimal places.
 * @param firstValue - The first value to be multiplied.
 * @param secondValue - The value that will be multiplied by the firstValue.
 * @returns The result of the multiplication of the two values.
 */
/* -------------------------------- Another Function For Multiplication ------------------------------- */

function multiplication2(firstValue, secondValue) {
  const resultMul = firstValue * secondValue;
  const result = resultMul.toFixed(2);
  return result;
}

/* ----------------------------------------------------------------------------------------------------- */
/**
 * If any of the errors are not a number, less than zero, or an empty string, return false, otherwise
 * return true.
 * @param errors - an array of errors
 * @returns the value of the variable "result"
 */
/* ---------------------------------- Function For Validation ------------------------------------------ */

function validation(errors) {
  for (let error of errors) {
    if (isNaN(error) || error < 0 || error === "") {
      return false;
    }
  }
  return true;
}

/* ----------------------------------------------------------------------------------------------------- */
/* A function that changes the background color of the element that is passed to it. */
/* ---------------------------------- Function For Random Color ---------------------------------------- */

randomColor = function (e) {
  e.style.background = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
};