 let start= false;
 const startCar=()=>{
    if(start){
        console.log("Car is already start")
    }
    else{
        start=true;
        console.log("Car is on");
    }
 }

 const runCar=()=>{
    if(start){
        console.log("Car is running")
    }
    else{
       
        console.log("Car isnot started yet");
    }
 }
 let running=true;

 const stopCar=()=>{
    if(running){
        console.log("Stop")
        running=false;
    }
    else{
        
        console.log("Car is not running");
        let break_applied= true
    }
 }

 const endJourney=()=>{
    if(break_applied){
        console.log("Journey Ended")
    }
   
 }

