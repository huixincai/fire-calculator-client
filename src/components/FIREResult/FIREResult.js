import "./FIREResult.scss";

function FIREResult({ results }) {
  if (!results) {
    return <p>No data available. Please submit the form to calculate.</p>;
  }

  return (
    <div className="fire-results">
      <p>Years until financial independence: {results.yearsToFI}</p>
      <p>Age at financial independence: {results.ageAtFI}</p>
      <p>Required savings: {results.requiredSavings}</p>
    </div>
  );
}

export default FIREResult;
