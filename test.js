 let start= false;
 let running=false;
 let car_stop=false;
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
        running=true
        console.log("Car is running")
    }
    else{
       
        console.log("Start the car first");
    }
 }
 

 const stopCar=()=>{
    if(running){
        car_stop=true;
        console.log("Car is stopping...")
        running=false;
    }
    else{
        
        console.log("Car is not running");
        
    }
 }

 const endJourney=()=>{
    if(car_stop){
        console.log("Journey Ended")
    }else{
        console.log("Apply break first")
    }
   
 }
 startCar();
 runCar();
 stopCar();
 endJourney();
