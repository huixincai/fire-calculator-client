import React, { useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import FIREResult from "../../components/FIREResult/FIREResult";
import FinancialTable from "../../components/FinancialTable/FinancialTable";
import FIREChart from "../../components/FIREChart/FIREChart";

import "./CalculatorPage.scss";

function CalculatorPage() {
  const [age, setAge] = useState(35);
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [annualExpenses, setAnnualExpenses] = useState(30000);
  const [currentNetWorth, setCurrentNetWorth] = useState(20000);
  const [expectedRateOfReturn, setExpectedRateOfReturn] = useState(3);
  const [results, setResults] = useState(null);

  const [visualData, setVisualData] = useState();

  const inflationRate = "3%";

  const handleCalculate = async (event) => {
    event.preventDefault();
    const payload = {
      age: parseInt(age, 10),
      annualIncome: parseFloat(annualIncome),
      annualExpenses: parseFloat(annualExpenses),
      currentNetWorth: parseFloat(currentNetWorth),
      expectedRateOfReturn: parseFloat(expectedRateOfReturn),
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/calculate",
        payload
      );
      // console.log("Received data from server:", data);
      // const [low, average, high] = data;
      const [, average,] = data;
      setResults(average);
      setVisualData(average.yearlyData);
    } catch (error) {
      console.error("Error performing the calculation:", error);
      alert(
        "Calculation failed: " +
          (error.response ? error.response.data.error : error.message)
      );
    }
  };

  return (
    <>
      <Header />
      <div className="calculator">
        <form onSubmit={handleCalculate} className="form">
          <div className="input-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />
          </div>
          <div className="input-group">
            <label htmlFor="annualIncome">Annual Income:</label>
            <input
              type="number"
              id="annualIncome"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              placeholder="Enter your annual income"
            />
          </div>
          <div className="input-group">
            <label htmlFor="annualExpenses">Annual Expenses:</label>
            <input
              type="number"
              id="annualExpenses"
              value={annualExpenses}
              onChange={(e) => setAnnualExpenses(e.target.value)}
              placeholder="Enter your annual expenses"
            />
          </div>
          <div className="input-group">
            <label htmlFor="currentNetWorth">Current Net Worth:</label>
            <input
              type="number"
              id="currentNetWorth"
              value={currentNetWorth}
              onChange={(e) => setCurrentNetWorth(e.target.value)}
              placeholder="Enter your current net worth"
            />
          </div>
          <div className="input-group">
            <label htmlFor="expectedRateOfReturn">
              Expected Rate of Return (%):
            </label>
            <input
              type="number"
              id="expectedRateOfReturn"
              value={expectedRateOfReturn}
              onChange={(e) => setExpectedRateOfReturn(e.target.value)}
              placeholder="Enter expected rate of return"
            />
            <div className="input-group">
              <label>Inflation Rate Used in Calculations:</label>
              <span className="inflation-rate">{inflationRate}</span>
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Calculate
          </button>
        </form>
        {results && <FIREResult results={results} />}
        {visualData && <FinancialTable data={visualData} />}
        {visualData && <FIREChart data={visualData} />}
      </div>
    </>
  );
}

export default CalculatorPage;
