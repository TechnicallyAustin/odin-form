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

  const logo = logoDiv.appendChild(document.createElement("img"));
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
  const subText = textDiv.appendChild(document.createElement("p"));

  // middle
  const middle = right.appendChild(document.createElement("div"));
  middle.setAttribute("class", "middle");

  const form = middle.appendChild(document.createElement("form"));
  form.setAttribute("action", "POST");

  // Name Fieldset

  const nameInput = form.appendChild(document.createElement("fieldset"));
  nameInput.setAttribute("class", "name-field");

  const firstLabel = nameInput.appendChild(document.createElement("label"));
  firstLabel.setAttribute("for", "first-name");
  firstLabel.textContent = "First Name";

  const first = nameInput.appendChild(document.createElement("input"));
  first.setAttribute("type", "text");
  first.setAttribute("placeholder", "First Name");

  const secondLabel = nameInput.appendChild(document.createElement("label"));
  secondLabel.setAttribute("for", "first-name");
  secondLabel.textContent = "Last Name";

  const second = nameInput.appendChild(document.createElement("input"));
  second.setAttribute("type", "text");
  second.setAttribute("placeholder", "Last Name");

  // Contact Fieldset
  const contactInput = form.appendChild(document.createElement("fieldset"));
  contactInput.setAttribute("class", "contact-field");

  // email
  const emailLabel = contactInput.appendChild(document.createElement("label"));
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";

  const email = emailLabel.appendChild(document.createElement("input"));
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "name@domain.com");

  // phone
  const phoneLabel = contactInput.appendChild(document.createElement("label"));
  phoneLabel.setAttribute("for", "phone-number");
  phoneLabel.textContent = "Last Name";

  const phone = contactInput.appendChild(document.createElement("input"));
  phone.setAttribute("type", "text");
  phone.setAttribute("placeholder", "(123)-456-7890");

  // Password fieldset
    const passwordInput = form.appendChild(document.createElement("fieldset"));
    passwordInput.setAttribute("class", "name-field");

    const passwordLabel = passwordInput.appendChild(document.createElement("label"));
    passwordLabel.setAttribute("for", "password");
    passwordLabel.textContent = "Password";

    const password = passwordInput.appendChild(document.createElement("input"));
    password.setAttribute("type", "password");
    password.setAttribute("autocomplete", "current-password");

    const confirmLabel = passwordInput.appendChild(document.createElement("label"));
    confirmLabel.setAttribute("for", "confirm-password");
    confirmLabel.textContent = "Confirm Password";

    const confrim = passwordInput.appendChild(document.createElement("input"));
    confrim.setAttribute("type", "text");
    confirm.setAttribute("placeholder", "current");

  // password
  // password conf
  // bottom

  // submit
  // login
}
techForms();
