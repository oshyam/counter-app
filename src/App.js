import React,{ useState }  from 'react';
import './App.css';



function App(){

  function alertUser(){
    if(count===0){
      alert("Already Reset for you Sir")
    }else{
      setCount(0)
    alert('reset to counter position = 0')
    }

    
  }

  function decreUser(){
    //short hand trick--> ()=>count<=0?"":setCount(count-1);
    if(count<=0){
      alert("Sorry !! You can not decrease to negative values");
    }else{
      setCount(count-1);
    }
  }


  //useState
  /*
  this is the way we deine state where count variable could be changed
   using set and then variable first letter here S UppercaseName
   ex- const [var,setVar] = useState() // here useState can take any data type
       ---> const [count,setCount] = useState(0);
  */
  
  const [count,setCount] = useState(0);

  return(
    <div className="App">
      <header>
        <h1>Counter App with State/Hook</h1>
      </header>
      <h2>Counter Position {count}</h2>
      <button onClick={()=>count>=10?alert("Ouch!! Max limit reached"):setCount(count+1)}>Increase Count</button>
      <button onClick={decreUser}>Decrease Count</button>
      <button onClick={alertUser}>Reset</button>

    </div>
  );
}



export default App;