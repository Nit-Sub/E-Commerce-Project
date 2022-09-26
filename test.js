// const firstPromise = () => {
//     return new Promise((res, rej) => {
//         res("I  am first promise")
//     })

// }

// const secondPromise = () => {
//     return new Promise((res, rej) => {

//         res("I am second Promise")
//     })
// }

// const thirdPromise = () => {
//     return new Promise((res, rej) => {

//         res("I am third Promise") 
//     })
// }


// firstPromise()
//     .then(
//         (res) => {
//             console.log("First", res)

//         }
//     )
//     .catch(
//         (rej)=>{
//             console.log("Rej:",rej)
//         }


//   )


// function User (){
//     this.name="";
//     this.rol="";
// }

// let user= new User();
// console.log(user)
// user.name="Nitesh Subedi";
// console.log(user)
// console.log(user.name)  

class Product 
{
    name;
    price;
    discount;   
    brand;
    constructor (data){
        this.name= data.name;
        this.price=data.price;
        this.discount=data.discount;
        this.brand=data.brand;
    }
    afterDiscount= function(){
        let afterDiscount = this.price - this.price*this.discount/100;
        this.afterDiscount=afterDiscount;
    }
}
let Product_item = new Product({
    name:"Iphone" , price :"100000", discount:10 , brand:"Test"
});
console.log(Product_item)
Product_item.afterDiscount();
console.log(Product_item)