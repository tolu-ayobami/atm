import React, {useState} from "react";
import img from "../images/Subtract1.png";



const Reviews = ({yinu}) =>{

    const[pad, setPad] = useState("");

    const[yet, setYet] = useState("");

    const[pat, setPat] = useState("");

    const[yeh, setYeh] = useState("");

    const[yut, setYut] = useState("");

    const dep = (e) =>{
        setPad(e.target.value);
    }


    
    const get = (e) =>{
        setYet(e.target.value);
    }

    
    const det = (e) =>{
        setPat(e.target.value);
    }

    
    const ted = (e) =>{
        setYeh(e.target.value);
    }

    
    const wet = (e) =>{
        setYut(e.target.value);
    }



    const [tob, setTob] = useState(false);

    const vol =() =>{
        setTob(!tob);
    }


    const ref =() =>{
        window.location.reload();
    }

    const man = (e) =>{
        e.preventDefault();


        if(!pad, !pat, !yeh, !yet, !yut){
            alert("please input value");
        }

        if(yet < 12){
            alert("number must be 12");
        }


        yinu({pad, pat, yeh, yet, yut});

        

       
            setTob(!tob);
        setPad("")
        setPat("")
        setYut("")
        setYeh("")
        setYet("")

    }


    return(
        <div className="all">
   
   <div className="pup">
      {tob?  "": <h1> GENERATE YOUR CARD DETAILS</h1> }           
</div>

          {tob? <div className="low">

<img src={img} alt={img}/>

<h1>Thank you!</h1>
<p> We've added your card details</p>
<button type='submit' className="but"  onClick={(vol, ref)} >Continue</button>
</div> : 
            <form className="allset" onSubmit={man}>
             
                <div className="bat">
            <label>Cardholder name </label>
            <input type="text" placeHolder="e.g tolu ayobami" value={pad} onChange={dep} required/>
            <label>Card number</label>
            <input type="number"  placeHoLder="e.g 1234 5678 0000" value={yet} onChange={get} required/>
            
            </div>

            <div className="ty">
                <div>
                <p>Exp.date</p> 
            <input type="number"  className="yeh" placeHolder="MM" value={pat} onChange={det}  required/>
                </div>
          <div>
          <p>(mm/yy)</p> 
            <input type="number" className="yeh"  placeHolder="YY" value={yeh} onChange={ted} required/>
          </div>
            <div>
            <p>cvc</p> 
            <input type="number" className="yut" placeHolder="e.g 123" value={yut} onChange={wet} required/>
            </div>
           
            </div>
            <input type='submit'   className="sub" value="Confirm" />
            </form>
             }

           
        </div>



    );
}

export default Reviews;