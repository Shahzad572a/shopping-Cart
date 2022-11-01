// Mobile: price_1LutKvI0ND2uRSkD4Ryk4x4d
//LED: price_1LutKvI0ND2uRSkD4Ryk4x4d
//Laptop: price_1LutNwI0ND2uRSkDYfINBQNI
const products =[
    {
        id:'price_1LutKvI0ND2uRSkD4Ryk4x4d',
        tittle:'Mobile',
        price:  10.60
    },
    {
        id:'price_1LutNCI0ND2uRSkDqGJxMsdj',
        tittle:'LED',
        price: 5.33
    },
    {
        id:'price_1LutNwI0ND2uRSkDYfINBQNI',
        tittle:'Laptop',
        price: 50.00
    },

]
export function getProduct(id){
let productData = products.find(product =>product.id ===id)
if(productData==undefined){
    console.log("product data does not exist for ID :" + id);
    return undefined
}
return productData
}

 export {products};