//
// Mobile: price_1LutKvI0ND2uRSkD4Ryk4x4d
//LED: price_1LutNCI0ND2uRSkDqGJxMsdj
//Laptop: price_1LutNwI0ND2uRSkDYfINBQNI
const express = require('express');
var cors =require('cors');
const stripe =require('stripe')('0ND2uRSkDvA8AIb2Zl1xRNKwvJZEtjTTLiWcOlCCEwHF0p1VpUhLwpXlCAGWfqP5YYtTV8LHxM8aMFMsF003Hg0mdSksk_test_51LuhxtI0ND2uRSkDvA8AIb2Zl1xRNKwvJZEtjTTLiWcOlCCEwHF0p1VpUhLwpXlCAGWfqP5YYtTV8LHxM8aMFMsF003Hg0mdSk')

const app =express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json)

app.post("/checkout", async (req, res) =>{
/*
re.body.items[
    {
        id:1,
        quantity:3
    }
]
stripe wants[
    {
        price:1,
        quantity:3
    }
]
*/
console.log(req.body);
const items =req.body.items;
let lineItems =[];
items.foreach((item) =>{
    lineItems.push(
        {
            price:item.id,
            quantity:item.quantity
        }
    )
});
const session =await stripe.checkout.sessions.create({
    line_items:lineItems,
    mode: 'payment',
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
});
res.send(JSON.stringify({
    url:session.url
}));

});
app.listen(4000, () => console.log("Listening on port 3000"))