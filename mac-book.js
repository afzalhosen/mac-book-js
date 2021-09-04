// onclick functions 
function CustomConfigurs(customization) {
    if (customization === '8gb') {
        customConfigureCost('extra-memory-cost', 0)
    } else if (customization === '16gb') {
        customConfigureCost('extra-memory-cost', 180)
    } else if (customization === '256gb') {
        customConfigureCost('extra-storage-cost', 0)
    } else if (customization === '512gb') {
        customConfigureCost('extra-storage-cost', 100)
    } else if (customization === '1tb') {
        customConfigureCost('extra-storage-cost', 180)
    } else if (customization === 'prime') {
        customConfigureCost('delivery-cost', 0)
    } else if (customization === 'first') {
        customConfigureCost('delivery-cost', 20)
    }
    totalCost()
}
// field updating function after customization
function customConfigureCost(Configure, cost) {
    document.getElementById(Configure).innerText = cost
}
// total updating function after customization
function totalCost() {
    var total = 1299 + costAmount('extra-memory-cost') + costAmount('extra-storage-cost') + costAmount('delivery-cost');
    customConfigureCost('total-price', total)
    customConfigureCost('coupon-amount', total)
}
// converting as float from text
function costAmount(perameter) {
    var total = document.getElementById(perameter).innerText
    return parseFloat(total)
}
// promo submitting function 
function promoCode() {
    var promo = document.getElementById('promoCode').value
    if (promo == 'stevekaku') {
        var totalAmount = costAmount('total-price')
        var OfferPrice = totalAmount * 80 / 100
        customConfigureCost('coupon-amount', OfferPrice)
    }
}