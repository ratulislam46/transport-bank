document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault();
    
    const number = document.getElementById("number").value;
    const password = document.getElementById("password").value;
    const convartedPassword = parseFloat(password);
    
    if(number.length===11){
        if(convartedPassword===1234){
            window.location.href = "main.html"
        }
        else{
            alert('Invalid your PIN')
        }
    }
    else{
        alert('Invalid your Number')
    }
})
