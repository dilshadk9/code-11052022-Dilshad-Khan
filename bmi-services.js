const jsonData = require("./data");
const {calculateBMI , getTotalOverweight, getBMICategory} = require("./functions");
//intialize the service
const services = {};

services.getData = () => {
  console.time();
  var finalData = jsonData.map((obj) => {
    let bmi = calculateBMI(obj.WeightKg, obj.HeightCm);
    let [category, heatlhRisk] = getBMICategory(bmi);
    return {
      ...obj,
      bmi: bmi,
      bmiCategory: category,
      healthRisk: heatlhRisk,
    };
  });

  const totalOverweight = finalData.filter(getTotalOverweight).length;
  console.timeEnd();
  return [...finalData, { totalOverweight: totalOverweight }];
};

module.exports = services;
