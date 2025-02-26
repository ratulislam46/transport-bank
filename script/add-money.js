
document.getElementById("add-money-container").style.display = 'block';
document.getElementById("cash-out-container").style.display = 'none';
document.getElementById("transaction-container").style.display = 'none';

document.getElementById("add-money-card").addEventListener('click', function(event){
    event.preventDefault()
    getInputAndValue("add-money-container", "block")
    getInputAndValue("cash-out-container", "none")
    getInputAndValue("transaction-container", "none")

}) 

document.getElementById("add-amount-btn").addEventListener('click', function(event){
    event.preventDefault()
    const amount = getInputVAlueByID("ammount")
    const pin = getInputVAlueByID("pin");
    const mainAmount= getInnerTextByID("main-amount")
    const number = document.getElementById("number").value;

    if(amount < 0 ){
        alert("please give posive amount");
        return;
    }

    if(number.length===11){
        if(pin===1234){
            const sum = mainAmount + amount;
            // document.getElementById("main-amount").innerText = sum;                                   (---optinal---)
            giveMainAmout("main-amount", sum)
            
        }
        else{
            alert('Invalid your PIN')
        }
    }
    else{
        alert('Invalid your number')
    }
})