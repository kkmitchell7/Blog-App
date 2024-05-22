

function onSubmit(){
    const registerForm = document.getElementById("registerForm");

    if (registerForm.checkValidity()){
        //TODO create user in database
        const firstName = document.getElementById("floatingFirstName").value;
        const lastName = document.getElementById("floatingLastName").value;
        const bio = document.getElementById("floatingBio").value;
        const email = document.getElementById("floatingEmail").value;
        const password = document.getElementById("floatingPassword").value;

        console.log(firstName, lastName,bio,email,password);
    } else {
        console.log("Form not valid");
    }

    registerForm.classList.add('was-validated');

}