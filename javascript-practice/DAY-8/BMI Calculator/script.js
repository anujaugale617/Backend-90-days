const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please enter a valid height.";
    }
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please enter a valid weight.";
    }
    else {
        const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));

        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is ${bmi}. You are UNDERWEIGHT.`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `Your BMI is ${bmi}. You are NORMAL WEIGHT.`;
        }
        else {
            results.innerHTML = `Your BMI is ${bmi}. You are OVERWEIGHT.`;
        }
    }
});