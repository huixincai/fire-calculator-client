import React, { useState } from "react";
import FIREResult from "../../components/FIREResult/FIREResult";
import FinancialTable from "../../components/FinancialTable/FinancialTable";
import FIREChart from "../../components/FIREChart/FIREChart";
import WithdrawalTable from "../../components/WithdrawalTable/WithdrawalTable";

import "./CalculatorRighPanel.scss";

function CalculatorRighPanel({ results }) {
  const [showChart, setShowChart] = useState(true);
  const [showWithdrawalTable, setShowWithdrawalTable] = useState();

  const [allowSwitch, setAllowSwitch] = useState(true);

  if (!results) {
    return <p>No data available. Please submit the form to calculate.</p>;
  }

  const [, average] = results;
  const { yearlyData: visualData } = average;

  const toggleTableChart = () => {
    setShowChart((prev) => !prev);
    setShowWithdrawalTable(false);
    setAllowSwitch(false);
    setTimeout(() => setAllowSwitch(true), 300);
  };

  return (
    <>
      <div className="right-panel__button-group">
        {!showWithdrawalTable && (
          <button
            className="right-panel__chart-button"
            onClick={() => setShowWithdrawalTable(true)}
            disabled={!allowSwitch}
          >
            WithdrawalRate
          </button>
        )}
        <button
          className="right-panel__chart-button"
          onClick={toggleTableChart}
          disabled={!allowSwitch}
        >
          {showChart ? "Show Table" : "Show Chart"}
        </button>
      </div>
      <div className="right-panel__content">
        {showWithdrawalTable && <WithdrawalTable data={results} />}
        {!showWithdrawalTable && (
          <>
            <FIREResult data={average} />
            {showChart ? (
              <FIREChart data={visualData} />
            ) : (
              <FinancialTable data={visualData} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default CalculatorRighPanel;
