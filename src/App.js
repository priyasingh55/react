import React from "react";
import ExpenseItem from './expenseTracker/ExpenseItem';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }


 export default function App(){
      let expenseDate = new Date(2023,5,8);
      let expenseTitle = "School fee";
      let expenseAmount =300;

  return (
    <>
    <h2>Let's get started</h2>
    <ExpenseItem> 
      date={expenseDate} 
      title={expenseTitle} 
      amount={expenseAmount}
       </ExpenseItem>
 </>
  )
 }