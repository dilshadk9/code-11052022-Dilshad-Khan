const chai = require("chai");
const request = require("supertest");
const expect = chai.expect;
const app = require("../app");
const bmiServices = require("../bmi-services");
const {calculateBMI,getTotalOverweight , getBMICategory} = require("../functions");

describe("Calculate BMI", function () {
  it("should return BMI", async function () {
    const calculate = calculateBMI(96, 171);
    expect(calculate).to.be.a("number");
    expect(calculate).to.be.greaterThan(0);
  });
});

describe("Category and Healthrish", function () {
  it("should return Category and Health Risk", async function () {
    const calculate = getBMICategory(28);
    expect(calculate).to.be.an("array");
  });
});

before("Restful API", function () {
    it("should return 200 OK with all the BMIs", async function () {
      const response = await request(app)
        .get("/api/bmi")
        .expect(200)
        .expect("Content-Type", /json/);
  
      const bmis = response.body;
      expect(bmis).to.be.an("array");
      expect(bmis).length.to.be.greaterThan(0);
    });
  });
