const calculateBMI = (weight, height) => {
  if (
    weight === undefined ||
    weight == "" ||
    height === undefined ||
    height == ""
  )
    return false;
  return Math.floor(weight / (height * 0.01 * 2));
};

//calculate category, health risk
const getBMICategory = (bmi) => {
  if (bmi === undefined || bmi == "") return false;
  let category = "-";
  let heatlhRisk = "-";
  if (bmi < 18.4) {
    category = "Underweight";
    heatlhRisk = "Malnutrition risk";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
    heatlhRisk = "Low risk";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    heatlhRisk = "Enhanced risk";
  } else if (bmi >= 30 && bmi <= 34.9) {
    category = "Moderately obese";
    heatlhRisk = "Medium risk";
  } else if (bmi >= 35 && bmi <= 39.9) {
    category = "Severel obese";
    heatlhRisk = "High";
  } else {
    category = "Very severely obese";
    heatlhRisk = "Very high risk";
  }
  return [category, heatlhRisk];
};

//count overweight
const getTotalOverweight = (obj) => {
  if (obj.bmiCategory == "Overweight") {
    return true;
  }
  return false;
};

module.exports = { calculateBMI, getTotalOverweight, getBMICategory };
