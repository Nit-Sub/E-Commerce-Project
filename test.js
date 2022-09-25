const doSomething = () => {
    return new Promise((resolve, reject) => {
        let db = false;
        if(db) {
            resolve({
                name: "Nitesh Subedi"
            });
        }
        else {
            reject("Erroe while executing")

        }
    })

}


const result = doSomething();
console.log(result)