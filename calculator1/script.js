function calculateBMI() {
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (!height || !weight || !age) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
