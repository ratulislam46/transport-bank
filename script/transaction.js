
document.getElementById("transaction-box").addEventListener('click', function(event){
    event.preventDefault()
    getInputAndValue("add-money-container", "none");
    getInputAndValue("cash-out-container", "none");
    getInputAndValue("transaction-container", "block");
})