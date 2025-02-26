
// for (add-money.js and toggle.js)
function getInputAndValue (id, status){
    document.getElementById(id).style.display = status;
}

function getInputVAlueByID(id){
    const value = document.getElementById(id).value;
    const convartedValue = parseFloat(value);
    return convartedValue;
}

function getInnerTextByID (id){
    const value = document.getElementById(id).innerText;
    const convartedValue2 = parseFloat(value);
    return convartedValue2;
}

function giveMainAmout(id, value){
    document.getElementById(id).innerText= value;
}