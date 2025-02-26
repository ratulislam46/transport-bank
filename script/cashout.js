
document.getElementById("cashout-card").addEventListener('click', function(event){
    event.preventDefault();
    getInputAndValue("add-money-container", "none")
    getInputAndValue("cash-out-container", "block")
    getInputAndValue("transaction-container", "none")
})


document.getElementById("withdraw-money-btn").addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputVAlueByID("withdraw-ammount");
    const pin = getInputVAlueByID("withdraw-pin");
    const mainAmount = getInnerTextByID("main-amount");
    const agentNumber = document.getElementById("Agent-number").value;

    if(mainAmount < amount){
        alert('Amount not available');
        return;
    }
    

    if(agentNumber.length===11){
        if(pin===1234){
            const subtracsion = mainAmount - amount;
            giveMainAmout('main-amount', subtracsion)
        }
        else{
            console.log("Invalid PIN")
        }
    }
    else{
        alert('Invalid Agent Number')
    }
})