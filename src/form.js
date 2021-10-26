import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';


function Header() {
    let [second,setSecond]=useState(1);
    let [minute,setMinute]=useState(0);
    let [hour,setHour]=useState(0);
    function run(){
        if(second>=59 && minute<60)
        {
            setSecond(0);
            setMinute(minute+1);
        }
        else if(minute>=59){
            setSecond(0);
            setMinute(0);
            setHour(hour+1)
        }
        else{
        setSecond(second+1);
        }
    }
    setTimeout(run,1000)
    return <div className="container col">
            <h2 className="text-center">Good Work!</h2>
            <ProgressBar className="bg-danger p-2 text-white" style={{width:second+3+"%",height:10+"%"}}>{second} Sec</ProgressBar><br/>
            <ProgressBar className="bg-success p-2 text-white" style={{width:minute+3+"%",height:10+"%"}}>{minute} Min</ProgressBar><br/>
            <ProgressBar className="bg-primary p-2 text-white" style={{width:hour+3+"%",height:10+"%"}}>{hour} Hr</ProgressBar><br/>
            </div>   
    };
    
    

    
// function Delay(props){
//     let time = props.name;
//     setTimeout(() => { time +=1;}, 5000);
//     return <Header time={time} />
// }

export default Header