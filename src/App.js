import { useState } from "react";
import Header from "./components/Header/header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
// console.log("hello");


function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if(userInput){
    
  let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
  const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
  const expectedReturn = +userInput["expected-return"] / 100;
  const duration = +userInput["duration"];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  // Should be triggered when form is submitted
  // You might not directly want to bind it to the submit event on the form though...

  // per-year results

  }

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {!userInput && <p style = {{textAlign: 'center' ,}}> No investmen calculated yet .</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment ={userInput['current-savings']}/>}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;

// parsing and arrow function
