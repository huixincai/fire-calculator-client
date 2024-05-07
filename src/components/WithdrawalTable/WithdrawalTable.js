import React from "react";
import Table from "react-bootstrap/Table";
import "./WithdrawalTable.scss";

const WithdrawalTable = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No data available. Please submit the form to calculate.</p>;
  }
  return (
    <div className="withdrawal-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Withdrawal Rate (WR)</th>
            <th>Target</th>
            <th>FIRE Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.withdrawalRate * 100}%</td>
              <td>${item.requiredSavings.toLocaleString()}</td>
              <td>{item.canFIRE ? item.chartYear : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default WithdrawalTable;
