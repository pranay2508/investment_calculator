
import { useState } from "react";
import classes from './UserInput.module.css'
const initialUserInput ={

    
        'current-savings':10000 ,
        'yearly-contribution':1200,
        'expected-return':7,
        duration:10
    
};

const UserInput =(props) =>{

   const [userInput , setUserInput] = useState( initialUserInput);
    const submitHandler=(event)=>{
        event.preventDefault();
        // console.log('hoola');
        props.onCalculate(initialUserInput);

     };

        const resetHandler = () =>{
        setUserInput( initialUserInput);

            // console.log('reset');

        };

        const inputchangeHandler =(input ,value ) =>{
            // console.log(input , value);
            setUserInput((prevInput)=>{
                return {
                    ...prevInput,
                    [input]: + value, // the + converts the string value to a number
                };
            } );
        };

    return (<form  onSubmit={submitHandler}className={classes.form}>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input onChange={(event)=>inputchangeHandler('current-savings' , event.target.value)}
        value={userInput['current-savings']}
        type="number" id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input onChange={(event)=>inputchangeHandler('yearly-contribution' , event.target.value)} 
        value={userInput['yearly-contribution']}
        type="number" 
        id="yearly-contribution" />
      </p>
    </div>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input onChange={(event)=>inputchangeHandler('expected-return' , event.target.value)} 
        value={userInput['expected-return']}
        type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input onChange={(event)=>inputchangeHandler('duration' , event.target.value)} 
        value={userInput['duration']}
        type="number" id="duration" />
      </p>
    </div>
    <p className={classes.actions}>
      <button onClick={resetHandler}type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className={classes.button}>
        Calculate
      </button>
    </p>
  </form>);
};
export default UserInput;












//