const cart=["pants","tshirt","eraser","table"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId)
})

const promise= createOrder(cart);
promise.then(function (orderId){
    proceedToPayment(orderId)
})