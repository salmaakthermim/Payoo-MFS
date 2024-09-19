// console.log('button clicking file added')
// search:form submit reloading the page

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked');

    const MobileNumber = document.getElementById('Mobile-number'). value;
    console.log(MobileNumber)
})