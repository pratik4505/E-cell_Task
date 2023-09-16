import { useState } from "react";
import classes from "./Box3.module.css";

const initial = {
  1: "Blue",
  2: "Blue",
  3: "Blue",
  4: "Blue",
  5: "Blue",
  6: "Blue",
  7: "Blue",
  8: "Blue",
  9: "Blue",
};




const Box3 = (props) => {

    const [color,setColor]=useState(initial);
    const [seqOrder,setSeqOrder]=useState([]);
    const [flag,setFlag]=useState(false);
    

   
    const reverseHandler=()=>{
        
        const inTimer=setTimeout(() => {

            const arr=[...seqOrder];
            const t=arr.shift();

            setSeqOrder(()=>arr);
            setColor((prev)=>{
                let p={...prev };
                p[t]="Blue";
                return p;
               });

               if(arr.length==0)
               setFlag(()=>false);
            
          }, 1000);

        
    };

   if(seqOrder.length!=0&&flag)
   {
    
    reverseHandler();
    
   }


    const colorChanger=(event)=>{
        if(color[event.target.id]=="Red"||flag){
            return;
        }

        setColor((prev)=>{
            let t={...prev };
            t[event.target.id]="Red";
            return t;
           });

        setSeqOrder((prev)=>{
            return [...prev,event.target.id];
        });

        if(event.target.id==="9"){
            setFlag(true);
        }

        
    };

    const temp=[];
    for(const key in color){
        if(color[key]==="Blue")
        temp.push(<li key={key} id={key} className={`${classes.item} ${classes.Blue}`} onClick={colorChanger}/>);
        else
        temp.push(<li key={key} id={key} className={`${classes.item} ${classes.Red}`} onClick={colorChanger}/>)

    }

  return (
    <>
      <ul className={`${classes.grid_box} ${props.className}`}>
        {temp}
      </ul>
    </>
  );
};

export default Box3;
