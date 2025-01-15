const handleSubmit=function(e){
    e.preventDefault();

    const email = document.querySelector('#emailAdd');
    const span = document.getElementById('error')
    const emailLabel= document.getElementById('emailLabel');
    const success = document.getElementById('success');
    const container = document.getElementById('container')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailVal = email.value
    var hasError = false

    if(email.value === ""){
        span.innerHTML = "valid email is required"
        email.style.border = '1px solid red'
        email.style.backgroundColor= "hsl(4, 64%, 89%)"
        
        hasError = true
    }else if(!emailVal.match(emailRegex)){
        span.innerHTML = "looks like not valid email "
        
        
    }else{
        container.style.display = "none"
        success.style.display = "block"
    }
    
}

const form = document.getElementById('emailBtn');
form.addEventListener('click', handleSubmit);

function dissmissBtn(){
    const success = document.getElementById('success');
    const container = document.getElementById('container')


    if (success.style.display = 'block'){
        container.style.display = "block"
        success.style.display = 'none'
    }else{
        success.style.display = 'block'
    }
}


const dissmiss = document.getElementById('dissmissBtn');
dissmiss.addEventListener('click', dissmissBtn);
