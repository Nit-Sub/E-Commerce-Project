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
    
    return new Promise((resolve , reject)=>{
    if(running){
        car_stop=true;
        console.log("Car is stopping...")
        running=false;
        reject(true);
    }
    else{
        
        console.log("Car is not running");
        resolve(true); 
        
    
 }})}

 const endJourney=async ()=>{
    let break_applied=await stopCar();
    
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
