function calculateBMI() {
  const gender = document.querySelector(".gender.selected"); // Get the selected gender
  const age = document.getElementById("age").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || !age || !gender) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  // Convert height from cm to meters for BMI calculation
  const bmi = weight / (height / 100) ** 2;
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



document.getElementById("calculate").addEventListener("click", calculateBMI);

const genders = document.querySelectorAll(".gender");
genders.forEach((gender) => {
  gender.addEventListener("click", function () {
    genders.forEach((g) => g.classList.remove("selected"));
    this.classList.add("selected");
  });
});
