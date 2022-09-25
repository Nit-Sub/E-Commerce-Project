let product=[{
    name:"A",
    price:1000,
    discount:10


}]
const calculateDiscount=(product)=>{
    product.afterdiscount=product.price-(product.price*product.discount)/100

}
product.map(calculateDiscount)
console.log(product)