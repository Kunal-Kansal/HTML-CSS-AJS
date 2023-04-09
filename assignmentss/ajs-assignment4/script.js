let sum = 0;
function addItem() {
    let itemName = document.getElementById("item-name-input").value;
    let itemPrice = document.getElementById("item-price-input").value;

    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');

    let nameData = document.createElement('td')
    nameData.setAttribute("data", "item-name");

    let priceData = document.createElement('td')
    priceData.setAttribute('data', 'item-price')

    nameData.textContent = itemName;
    priceData.textContent = itemPrice;

    tr.append(nameData);
    tr.append(priceData);

    tbody.append(tr);

    //empty the input fields
    document.getElementById("item-name-input").value = '';
    document.getElementById("item-price-input").value = '';

    //now add the total into grandTotal;
    let grandTotal = document.querySelector('[data-ns-test=grandTotal]')
    let prices = document.querySelectorAll('[data-ns-test=item-price]');

    sum += parseInt(itemPrice)
    grandTotal.textContent = sum
}