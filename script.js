//handle first class
function handleFirstClass(addMinus){
    const firstClassInput = document.getElementById  ("firstClassTicket").value;
     const firstClassInputNumb = parseInt(firstClassInput);
     if (addMinus == true) {
        inputNumb = firstClassInputNumb + 1;
     }
     if (addMinus == false) {
        inputNumb = firstClassInputNumb - 1;
     }
     document.getElementById("firstClassTicket").value = inputNumb;
     calculateSubTotal()
}


//handle economy class
function handleEconomyClass(addMinus){
    const economyClassInput = document.getElementById("economyClassTicket").value;
     const economyClassInputNumb = parseInt(economyClassInput);
     if (addMinus == true) {
        inputNumb = economyClassInputNumb + 1;
     }
     if (addMinus == false) {
        inputNumb = economyClassInputNumb - 1;
     }
     document.getElementById("economyClassTicket").value = inputNumb;
     calculateSubTotal()
}


// Total Setting
function calculateSubTotal(){
    const firstClassTotal = document.getElementById("firstClassTicket");
    const firstClassTotalNumb = parseInt(firstClassTotal.value);

    const economyClassTotal = document.getElementById("economyClassTicket");
    const economyClassTotalNumb = parseInt(economyClassTotal.value);

    const subTotal = firstClassTotalNumb * 150 + economyClassTotalNumb * 100;
    document.getElementById("subTotal").innerText = subTotal;

    const vatCharge = subTotal * 0.1;
    document.getElementById("vatCharge").innerText = vatCharge;

    const total = subTotal + vatCharge;
    document.getElementById("total").innerText = total;
}

