import React from "react";


function NewUserPg(props) {
    

  return (
 <div>
    <h1>Hello BOB</h1>
    <h2>Welcome to piggy bank where we take your financial litter to the next level!</h2>
    <h3>etc etcetc etcetc etcetc etcetc etcetc etcetc etc</h3>
    <h3>etc etcetc etcetc etcetc etc</h3>
    <h4> need to add button to take to actual dashboard </h4>
  
            <button className="risk-assessment-start-button" onClick={()=>{
            console.log('clicked')
            props.oldUser()
            // localStorage.setItem("newUser", false);

            }}>Get Started Now</button>

  </div>  
  
  
  );
}

export default NewUserPg;
