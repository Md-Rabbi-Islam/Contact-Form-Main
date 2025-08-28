const form = document.querySelector('.contact-form');
const inputAll = document.querySelectorAll('.same-error');
const requiredError = document.querySelectorAll('.required-error');
const emailInput = document.querySelector('.email-input');
const emailError = document.getElementById('email-error');
const checkbox= document.getElementById('checkbox');
const checkboxError = document.getElementById('checkbox-error');
const mainContainer = document.querySelector(".main-container");
const successMessage = document.querySelector(".success-message");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    
    let isValid = true;

    inputAll.forEach((input,key) => {
        if (input.value.trim() === "") {
            isValid = false;
            requiredError[key].textContent = "This field is required";   
            inputAll[key].classList.add("add-error");    
        } else {
            requiredError[key].textContent = "";  
            inputAll[key].classList.remove("add-error");    
        }
    })

    // Email 
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
    if (emailInput.value === "") {
        isValid = false;
        emailError.textContent = "This field is required";
        emailInput.classList.add("add-error");  
    }else if(!validEmail.test(emailInput.value.trim())){
        isValid = false;
        emailError.textContent = "Please enter a valid email address";
        emailInput.classList.add("add-error");   
    }else {
        emailError.textContent = "";
        emailInput.classList.remove("add-error");                
    }
    
    // Query 
    const query = document.querySelector("input[type='radio']:checked");
    const queryError = document.getElementById('query-error');

    if(!query){
        isValid = false;
        queryError.textContent ="Please select a query type";
    }
    else{
        queryError.textContent ="";
    }
    
    // Check
    if(!checkbox.checked){
        isValid = false;
        checkboxError.textContent = "To submit this form,please consent to being contacted"
    }
    else{
        checkboxError.textContent = "";
    }

    if(isValid){
        mainContainer.classList.add("form-shift");
        successMessage.classList.add("show-success");

        setTimeout(() => {
            mainContainer.classList.remove("form-shift");
            successMessage.classList.remove("show-success");
            form.reset();
        },3000);
    }
})