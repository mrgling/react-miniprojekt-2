export interface Order {

}

export async function sendOrderToApi(order: Order) {
    return new Promise(resolve => {
        console.log(order)
        setTimeout(resolve, 1500)
    })
}