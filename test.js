const firstPromise = () => {
    return new Promise((res, rej) => {
        res("I  am first promise")
    })

}

const secondPromise = () => {
    return new Promise((res, rej) => {

        res("I am second Promise")
    })
}

const thirdPromise = () => {
    return new Promise((res, rej) => {

        res("I am third Promise")
    })
}


firstPromise()
    .then(
        (res) => {
            console.log("First", res)

        }
    )
    .catch(
        (rej)=>{
            console.log("Rej:",rej)
        }


    )