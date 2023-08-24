
import React from "react";

const Proper = ({con}) =>{

    return(
        <div>
        {con.map((tour)=> {
            
            return(
                <div >
            <div className="oya">
            <div className="ho">
                        <div className="blac">
            
                        </div>
                        <div className="fron">
                            <p><b>{tour.yut}</b></p>
                            
                        </div>
                    </div>
                    
                    <div className="hi">
                        <div className="start">
                            <div className="bigcircle">
                            </div>
                            <div className="smallcircle">
                            </div>
                        </div>
                        
                        <h1><b>{tour.yet}</b></h1>
                            
                            <div className="two">
                            <p><b>{tour.pad}</b></p>
                            <p><b>{tour.pat} / {tour.yeh}</b></p>
                            </div>        
                    </div> 
            </div>  
                
                </div>

            );
  



            })}
            </div>


            );
            
}

export default Proper;