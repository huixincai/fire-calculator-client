import React from "react";
import Table from 'react-bootstrap/Table';
import Header from "../../components/Header/Header";
import "./SavingsTips.scss";

const SavingsTips = () => {
  const savingsData = [
    {
      expense: "New Pair of Shoes",
      oneYear: "$100",
      tenYears: "$151",
      byRetirement: "$157",
    },
    {
      expense: "Make Coffee at Home",
      oneYear: "$650",
      tenYears: "$983",
      byRetirement: "$1000",
    },
    {
      expense: "Drink One Less Cocktail Weekly",
      oneYear: "$520",
      tenYears: "$786",
      byRetirement: "$820",
    },
    {
      expense: "New iPhone",
      oneYear: "$800",
      tenYears: "$1200",
      byRetirement: "$1300",
    },
    {
      expense: "Fly with Travel Rewards Card",
      oneYear: "$1,000",
      tenYears: "$1500",
      byRetirement: "$1600",
    },
    {
      expense: "No Car Payments",
      oneYear: "$4,200",
      tenYears: "$6400",
      byRetirement: "$6600",
    },
  ];

  return (
    <>
    <Header showButton={false}/>
    <div className="savings-tips-container">
      <h2>Small Changes, Big Savings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Expense</th>
            <th>1 Year</th>
            <th>After 10 Years</th>
            <th>By Retirement</th>
          </tr>
        </thead>
        <tbody>
          {savingsData.map((item, index) => (
            <tr key={index}>
              <td>{item.expense}</td>
              <td>{item.oneYear}</td>
              <td>{item.tenYears}</td>
              <td>{item.byRetirement}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default SavingsTips;
