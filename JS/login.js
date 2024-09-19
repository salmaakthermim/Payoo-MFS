// console.log('button clicking file added')
// search:form submit reloading the page

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    

    const MobileNumber = document.getElementById('Mobile-number'). value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(MobileNumber, pinNumber)
    if (MobileNumber=== '5' && pinNumber=='1234'){
        console.log('you are logged in');
    }
    else{
        alert('weong phone number or pin');
    }
})