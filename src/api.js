// TO-DO
  // Validations
  // input Hover :focus css psuedo-class
  // password validaiton error display
  // Give passwords error class


function travelForm() {
  const travelForm = document.body.appendChild(document.createElement("div"));
  travelForm.setAttribute("class", "travel-form");

  function hero() {
    const hero = travelForm.appendChild(document.createElement("div"));
    hero.setAttribute("class", "hero");

    function logo() {
      const logo = hero.appendChild(document.createElement("div"));
      logo.setAttribute("class", "logo");

      function image() {
        const image = logo.appendChild(document.createElement("img"));
        image.setAttribute("class", "logo-image");
        image.setAttribute("src", "../assets/plane2.svg");
        image.setAttribute("alt", "Technicity Logo");
      }
      image();

      function text() {
        const text = logo.appendChild(document.createElement("h2"));
        text.setAttribute("class", "logo-text");
        text.textContent = "Technicity";
      }
      text();
    }
    logo();
  }
  hero();

  function main() {
    const main = travelForm.appendChild(document.createElement("main"));
    main.setAttribute("class", "main-section");

    function mainTextContainer() {
      const mainTextContainer = main.appendChild(
        document.createElement("section")
      );
      mainTextContainer.setAttribute("class", "main-container");
      const mainText = mainTextContainer.appendChild(
        document.createElement("h2")
      );
      mainText.setAttribute("class", "main-text");
      mainText.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

      function subText() {
        const subText = mainTextContainer.appendChild(
          document.createElement("p")
        );
        subText.setAttribute("class", "sub-text");
        subText.textContent = " Find your City and find your tribe.";
      }
      subText();
    }
    mainTextContainer();

    function formContainer() {
      const formContainer = main.appendChild(document.createElement("section"));
      formContainer.setAttribute("class", "form-container");

      function form() {
        const form = formContainer.appendChild(document.createElement("form"));
        form.setAttribute("action", "#");
        form.setAttribute("class", "form");

        function legendContainer() {
          const legendContainer = form.appendChild(
            document.createElement("div")
          );
          legendContainer.setAttribute("class", "legend-container");

          function legend() {
            const legend = legendContainer.appendChild(
              document.createElement("legend")
            );
            legend.setAttribute("class", "legend");

            function legendText() {
              const legendText = legend.appendChild(
                document.createElement("h3")
              );
              legendText.setAttribute("class", "legend-text");
              legendText.textContent = " Lets get started!";
            }
            legendText();
          }
          legend();
        }
        legendContainer();

        function inputs() {
          const inputs = form.appendChild(document.createElement("div"));
          inputs.setAttribute("class", "inputs");

          function nameInputContainer() {
            const nameInputContainer = inputs.appendChild(
              document.createElement("fieldset")
            );
            nameInputContainer.setAttribute("class", "name inputs-container");


            function firstNameContainer() {
              const firstNameContainer = nameInputContainer.appendChild(
                document.createElement("div")
              );
              firstNameContainer.setAttribute("class", "first-name");

              function firstName() {
                function label() {
                  const label = firstNameContainer.appendChild(
                    document.createElement("label")
                  );
                  label.setAttribute("for", "first-name");
                  label.setAttribute("class", "input-label");
                  label.textContent = "First Name";
                }
                label();

                function name() {
                  const name = firstNameContainer.appendChild(
                    document.createElement("input")
                  );
                  name.setAttribute("type", "text");
                  name.setAttribute("class", "form-input");
                  name.setAttribute("placeholder", "Clark");
                  name.setAttribute("maxlength", "25")
                  name.setAttribute("minlength", "2")
                  name.required = true
                  //validations
                }
                name();
              }
              firstName();
            }
            firstNameContainer();

            function lastNameContainer() {
              const lastNameContainer = nameInputContainer.appendChild(
                document.createElement("div")
              );
              lastNameContainer.setAttribute("class", "last-name");

              function lastName() {
                function label() {
                  const label = lastNameContainer.appendChild(
                    document.createElement("label")
                  );
                  label.setAttribute("for", "last-name");
                  label.setAttribute("class", "input-label");
                  label.textContent = "Last Name";
                }
                label();

                function name() {
                  const name = lastNameContainer.appendChild(
                    document.createElement("input")
                  );
                  name.setAttribute("type", "text");
                  name.setAttribute("class", "form-input");
                  name.setAttribute("placeholder", "Kent");
                  name.setAttribute("maxlength", "25");
                  name.setAttribute("minlength", "2");
                  name.required = true;
                  // validations
                }
                name();
              }
              lastName();
            }
            lastNameContainer();
          }
          nameInputContainer();

          function contactInputContainer() {
            const contactInputContainer = inputs.appendChild(
              document.createElement("fieldset")
            );
            contactInputContainer.setAttribute(
              "class",
              "contact inputs-container"
            );

            function emailContainer() {
              const emailContainer = contactInputContainer.appendChild(
                document.createElement("div")
              );
              emailContainer.setAttribute("class", "email");

              function label() {
                const label = emailContainer.appendChild(
                  document.createElement("label")
                );
                label.setAttribute("for", "email inputs-container");
                label.setAttribute("class", "input-label");
                label.textContent = "Email";
              }
              label();

              function email() {
                const email = emailContainer.appendChild(
                  document.createElement("input")
                );
                email.setAttribute("class", "form-input");
                email.setAttribute("placeholder", "ClarkKent@gmail.com");
                email.setAttribute("type", "email");
                email.setAttribute("minlength", "12")
                email.setAttribute("maxlength", "30")
                email.setAttribute("pattern", ".+@.+..+");        
                email.required = true
                // validations
              }
              email();
            }
            emailContainer();

            function phoneContainer() {
              const phoneContainer = contactInputContainer.appendChild(
                document.createElement("div")
              );
              phoneContainer.setAttribute("class", "phone");

              function label() {
                const label = phoneContainer.appendChild(
                  document.createElement("label")
                );
                label.setAttribute("for", "phone");
                label.setAttribute("class", "input-label");
                label.textContent = "Phone";
              }
              label();

              function phone() {
                const phone = phoneContainer.appendChild(
                  document.createElement("input")
                );
                phone.setAttribute("type", "phone");
                phone.setAttribute("class", "form-input");
                phone.setAttribute("placeholder", "1234567890");
                phone.setAttribute("minlength", "10")
                phone.setAttribute("maxlength", "10")
                // validations
              }
              phone();
            }
            phoneContainer();
          }
          contactInputContainer();

          function passwordInputContainer() {
            const passwordInputContainer = inputs.appendChild(
              document.createElement("fieldset")
            );
            passwordInputContainer.setAttribute(
              "class",
              "passwords inputs-container"
            );

            function passwordContainer() {
              const passwordContainer = passwordInputContainer.appendChild(
                document.createElement("div")
              );
              passwordContainer.setAttribute("class", "password");

              function label() {
                const label = passwordContainer.appendChild(
                  document.createElement("label")
                );
                label.setAttribute("for", "password");
                label.setAttribute("class", "input-label");
                label.textContent = "Password";
              }
              label();

              function password() {
                const password = passwordContainer.appendChild(
                  document.createElement("input")
                );
                password.setAttribute("type", "password");
                password.setAttribute("class", "pass form-input");
                password.setAttribute("autocomplete", "current-password");
                password.required = true
                // validations
              }
              password();
            }
            passwordContainer();

            function confirmContainer() {
              const confirmContainer = passwordInputContainer.appendChild(
                document.createElement("div")
              );
              confirmContainer.setAttribute("class", "confirm-password");

              function label() {
                const label = confirmContainer.appendChild(
                  document.createElement("label")
                );
                label.setAttribute("for", "confirm-password");
                label.setAttribute("class", "input-label");
                label.textContent = "Confirm Password";
              }
              label();

              function confirm() {
                const password = confirmContainer.appendChild(
                  document.createElement("input")
                );
                password.setAttribute("type", "password");
                password.setAttribute("class", "conf form-input");
                password.setAttribute("autocomplete", "current-password");
                password.required = true
                // validations
              }
              confirm();
            }
            confirmContainer();
          }
          passwordInputContainer();
        }
        inputs();

        function submitContainer() {
          const submitContainer = form.appendChild(
            document.createElement("fieldset")
          );
          submitContainer.setAttribute("class", "submit-container");

          function submitButton() {
            const submit = submitContainer.appendChild(
              document.createElement("input")
            );
            submit.setAttribute("class", "submit-button");
            submit.setAttribute("value", "Create Account");
            submit.setAttribute("type", "submit");
          }
          submitButton();

          function loginLink() {
            const login = submitContainer.appendChild(
              document.createElement("p")
            );
            login.setAttribute("class", "login");
            login.textContent = "Already have an account?"
            const link = " Log in"
            login.textContent += link
          };
          loginLink()
        };
        submitContainer()
      };
      form()
    };
    formContainer()
  };
  main()
};
travelForm()
