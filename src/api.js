function techForms() {
  // create page container
  const techForms = document.body.appendChild(document.createElement("div"));
  techForms.setAttribute("class", "tech-forms");

  //create left side container
  const left = techForms.appendChild(document.createElement("div"));
  left.setAttribute("class", "hero");
  // add logo
  const logoDiv = left.appendChild(document.createElement("div"));
  logoDiv.setAttribute("class", "logo-div");

  const logoContainer = logoDiv.appendChild(document.createElement("div"))
  logoContainer.setAttribute("class", "logo-container");

  const logo = logoContainer.appendChild(document.createElement("img"));
  logo.setAttribute("class", "logo");
  logo.setAttribute("src", "assets/odin-lined.png");

  // create right side container
  const right = techForms.appendChild(document.createElement("div"));
  right.setAttribute("class", "right");

  // top
  const top = right.appendChild(document.createElement("div"));
  top.setAttribute("class", "top");

  // add hero caption
  const textDiv = top.appendChild(document.createElement("div"));
  textDiv.setAttribute("class", "text");

  const text = textDiv.appendChild(document.createElement("p"));
  text.setAttribute("class", "hero-text")
  const subText = textDiv.appendChild(document.createElement("p"));
  subText.setAttribute("class", "hero-sub-text")

  // middle
  const middle = right.appendChild(document.createElement("div"));
  middle.setAttribute("class", "middle");

    // Form
  const form = middle.appendChild(document.createElement("form"));
  form.setAttribute("action", "GET");
  form.setAttribute("class", "moto-form")

  const legendDiv = form.appendChild(document.createElement("div"));
  legendDiv.setAttribute("class", "legend-div")

  const legend = legendDiv.appendChild(document.createElement("legend"));
  legend.setAttribute("class", "legend");
  legend.textContent = "Join the Two-Wheel Revolution"

    // Name Fieldset


  const nameInput = form.appendChild(document.createElement("fieldset"));
  nameInput.setAttribute("class", "name-field");

   const firstNameDiv = nameInput.appendChild(document.createElement("div"));
   firstNameDiv.setAttribute("class", "form-inputs");

  const firstLabel = firstNameDiv.appendChild(document.createElement("label"));
  firstLabel.setAttribute("for", "first-name");
  firstLabel.textContent = "First Name";

  const first = firstNameDiv.appendChild(document.createElement("input"));
  first.setAttribute("type", "text");
  first.setAttribute("placeholder", "First Name");
  first.setAttribute("autocomplete", "username")

  const lastNameDiv = nameInput.appendChild(document.createElement("div"));
  lastNameDiv.setAttribute("class", "form-inputs");

  const secondLabel = lastNameDiv.appendChild(document.createElement("label"));
  secondLabel.setAttribute("for", "first-name");
  secondLabel.textContent = "Last Name";

  const second = lastNameDiv.appendChild(document.createElement("input"));
  second.setAttribute("type", "text");
  second.setAttribute("placeholder", "Last Name");

    // Contact Fieldset
  const contactInput = form.appendChild(document.createElement("fieldset"));
  contactInput.setAttribute("class", "contact-field");

  const emailDiv = contactInput.appendChild(document.createElement("div"));
  emailDiv.setAttribute("class", "form-inputs");

    // email
  const emailLabel = emailDiv.appendChild(document.createElement("label"));
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";

  const email = emailDiv.appendChild(document.createElement("input"));
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "name@domain.com");

    // phone

  const phoneDiv = contactInput.appendChild(document.createElement("div"))
  phoneDiv.setAttribute("class", "form-inputs");

  const phoneLabel = phoneDiv.appendChild(document.createElement("label"));
  phoneLabel.setAttribute("for", "phone-number");
  phoneLabel.textContent = "Phone Number";

  const phone = phoneDiv.appendChild(document.createElement("input"));
  phone.setAttribute("type", "text");
  phone.setAttribute("placeholder", "(123)-456-7890");

    // Password fieldset
    const passwordInput = form.appendChild(document.createElement("fieldset"));
    passwordInput.setAttribute("class", "password-field");

    const passwordDiv = passwordInput.appendChild(document.createElement("div"));
    passwordDiv.setAttribute("class", "form-inputs");

    const passwordLabel = passwordDiv.appendChild(document.createElement("label"));
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password";

    const password = passwordDiv.appendChild(document.createElement("input"));
    password.setAttribute("type", "password");
    password.setAttribute("autocomplete", "current-password");

    const confrimDiv = passwordInput.appendChild(document.createElement("div"))
    confrimDiv.setAttribute("class", "form-inputs");

    const confirmLabel = confrimDiv.appendChild(document.createElement("label"));
    confirmLabel.setAttribute("for", "confirm-password");
    confirmLabel.textContent = "Confirm Password";

    const confirm = confrimDiv.appendChild(document.createElement("input"));
    confirm.setAttribute("type", "text");
    confirm.setAttribute("autocomplete", "current-password");

    const submitDiv = form.appendChild(document.createElement("div"));
    submitDiv.setAttribute("class", "submit-div");

    const submit =  submitDiv.appendChild(document.createElement("button"));
    submit.setAttribute("value", "submit")
    submit.textContent = "Create Account"

    const login = submitDiv.appendChild(document.createElement("p"));
    login.setAttribute("class", "login")
    login.textContent = "Already have an account? Login"
    





  // submit
  // login
}
techForms();
