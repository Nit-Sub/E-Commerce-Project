function reverseNumber() {

    
    let reverse = 0;
 
    for (let i=0;i<5;i++){
        digit = i % 10
        reverse = reverse * 10 + digit
        i=i/10
        
        
    }
    console.log(reverse)

}

