/* This is an event listener for the triangle button including error handling */
document.getElementById("btn-triangle").addEventListener("click", function () {
  const firstInputValue = inputFieldValue("triangle-base");
  const secondInputValue = inputFieldValue("triangle-height");
  const valid = validation([firstInputValue, secondInputValue]);
  if (valid == false) {
    alert("Please Provide valid input");
  } else {
    dynamicID += 1;
    const calculate = multiplication1(firstInputValue, secondInputValue);
    console.log(calculate);
    const triangleTitle = document.getElementById("triangle-title").innerText;
    areaCalculation(dynamicID, triangleTitle, calculate);
  }
});

/* This is an event listener for the rectangle button including error handling */
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const firstInputValue = inputFieldValue("rectangle-width");
  const secondInputValue = inputFieldValue("rectangle-length");
  const valid = validation([firstInputValue, secondInputValue]);

  if (valid == false) {
    alert("Please Provide valid input");
  } else {
    dynamicID += 1;
    const calculate = multiplication2(firstInputValue, secondInputValue);
    console.log(calculate);
    const rectangleTitle = document.getElementById("rectangle-title").innerText;
    areaCalculation(dynamicID, rectangleTitle, calculate);
  }
});

/* This is an event listener for the parallelogram button including error handling */
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const firstInputValue = inputFieldValue("parallelogram-base");
    const secondInputValue = inputFieldValue("parallelogram-height");
    const valid = validation([firstInputValue, secondInputValue]);
    if (valid == false) {
      alert("Please Provide valid input");
    } else {
      dynamicID += 1;
      const calculate = multiplication2(firstInputValue, secondInputValue);
      console.log(calculate);
      const parallelogramTitle = document.getElementById(
        "parallelogram-title"
      ).innerText;
      areaCalculation(dynamicID, parallelogramTitle, calculate);
    }
  });

/* This is an event listener for the rhombus button. */
document.getElementById("btn-rhombus").addEventListener("click", function () {
  dynamicID += 1;
  const calculate = multiplication1(16, 8);
  console.log(calculate);
  const triangleTitle = document.getElementById("rhombus-title").innerText;
  areaCalculation(dynamicID, triangleTitle, calculate);
});

/* This is an event listener for the pentagon button. */
document.getElementById("btn-pentagon").addEventListener("click", function () {
  dynamicID += 1;
  const calculate = multiplication1(6, 10);
  const triangleTitle = document.getElementById("pentagon-title").innerText;
  areaCalculation(dynamicID, triangleTitle, calculate);
});

/* This is an event listener for the ellipse button. */
document.getElementById("btn-ellipse").addEventListener("click", function () {
  dynamicID += 1;
  const calculate = (3.1416 * multiplication2(10, 4)).toFixed(2);
  const triangleTitle = document.getElementById("ellipse-title").innerText;
  areaCalculation(dynamicID, triangleTitle, calculate);
});


