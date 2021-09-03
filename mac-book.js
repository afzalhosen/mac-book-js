function CustomizationBtn(extraCostID, memory16GB, SSD512, SSD1TB) {
    var extraCost = document.getElementById(extraCostID);
    var exrtaCostAmount = parseFloat(extraCost.innerText);
    if (memory16GB == true) {
        var totalCost = exrtaCostAmount + 100;
        var totalExtra = extraCost.innerText = totalCost;
    } else if (SSD512 == 'yes') {
        var totalCost = exrtaCostAmount + 180;
        extraCost.innerText = totalCost;
    } else if (SSD1TB == 'yes') {
        var totalCost = exrtaCostAmount + 280;
        extraCost.innerText = totalCost;
    } else {
        var totalCost = exrtaCostAmount + 20;
        extraCost.innerText = totalCost;
    }
    var totalPrice = document.getElementById('total-amount')
    var totalPriceFloat = parseFloat(totalPrice.innerText);
    var totalExtra = extraCost.innerText = totalCost;
    var totalPriceAmount = totalPriceFloat + totalExtra
    totalPrice.innerText = totalPriceAmount;
}




document.getElementById('extra-memory-btn').addEventListener('click', function() {
    var custom = CustomizationBtn('extra-memory-cost', true);
})
document.getElementById('512GB-SSD-btn').addEventListener('click', function() {
    var custom = CustomizationBtn('extra-storage-cost', false, 'yes', );
})
document.getElementById('1TB-SSD-btn').addEventListener('click', function() {
    var custom = CustomizationBtn('extra-storage-cost', false, 'no', 'yes');
})
document.getElementById('delivery-cost-btn').addEventListener('click', function() {
    var custom = CustomizationBtn('delivery-cost');
})