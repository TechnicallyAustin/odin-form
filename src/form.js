function validate(){
       const form = document.querySelector("form");
       const password = document.querySelector(".pass");
       const passwordContainer = document.querySelector(".password")
       const confirm = document.querySelector(".conf");
       



       form.addEventListener("submit", ()=> {
           if (password.value === confirm.value){
               console.log("match")
            } else {
                console.log("no Match")
                password.setAttribute("class", "pass form-input error");
                confirm.setAttribute("class", "conf form-input error");

                const error = passwordContainer.appendChild(document.createElement("p"));
                error.setAttribute("class", "error-message");
                error.textContent = "* Passwords do not match"



            }
        })

       

       


}; validate()