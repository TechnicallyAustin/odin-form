function travelForm(){
    const travelForm = document.body.appendChild(document.createElement("div"));
    travelForm.setAttribute("class", "travel-form");

    function hero(){
        const hero = travelForm.appendChild(document.createElement("div"));
        hero.setAttribute("class", "hero");

        function logo(){
            const logo = hero.appendChild(document.createElement("div"));
            logo.setAttribute("class", "logo");

            function image(){
                const image = logo.appendChild(document.createElement("img"));
                image.setAttribute("class", "logo-image");
                image.setAttribute("src", "")
                image.setAttribute("alt", "The Odin project logo")
            }; image()

        }; logo()

    }; hero()

    function main(){
        const main = travelForm.appendChild(document.createElement("main"));
        main.setAttribute("class", "main-section");

        function mainTextContainer(){
            const mainTextContainer = main.appendChild(document.createElement("section"));
            const mainText = mainTextContainer.appendChild(document.createElement("h2"));
            mainText.setAttribute("class", "main-text");
            mainText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

            function subText(){
                const subText = mainTextContainer.appendChild(document.createElement("p"));
                subText.setAttribute("class", "sub-text");
                subText.textContent = " Find your City and find your tribe."
            }; subText()

        }; mainTextContainer()

        function formContainer(){
            const formContainer = main.appendChild(document.createElement("section"));
            formContainer.setAttribute("class", "form-container")

            function form(){
                const form = formContainer.appendChild(document.createElement("form"))
                form.setAttribute("action", "POST");
                form.setAttribute("class", "form")

                function legendContainer(){
                    const legendContainer = form.appendChild(document.createElement("div"));
                    legendContainer.setAttribute("class", "legend-container");

                    function legend(){
                        const legend = legendContainer.appendChild(document.createElement("legend"));
                        legend.setAttribute("class","legend")

                        function legendText(){
                            const legendText = legend.appendChild(document.createElement("h3"))
                            legendText.setAttribute("class", "legend-text")
                            legendText.textContent = " Lets get started!"

                        }; legendText()

                    }; legend()

                }; legendContainer()

                function nameInputContainer(){
                    const nameInputContainer = form.appendChild(document.createElement("div"));
                    nameInputContainer.setAttribute("class", "inputs-container");

                    function firstNameContainer(){
                        const firstNameContainer = nameInputContainer.appendChild(document.createElement("div"));
                        firstNameContainer.setAttribute("class", "first-name");

                        function firstName(){
                            function label(){
                                const label = firstNameContainer.appendChild(document.createElement("label"));
                                label.setAttribute("for", "first-name");
                                label.setAttribute("class", "input-label");
                                label.textContent = "First Name"
                            }; label()

                            function name(){
                                const name = firstNameContainer.appendChild(document.createElement("input"));
                                name.setAttribute("type", "text");
                                name.setAttribute("class", "form-input");
                                name.setAttribute("placeholder", "Clark")
                            }; name()
                        }; firstName()

                    };firstNameContainer()

                    function lastNameContainer(){
                        const lastNameContainer = nameInputContainer.appendChild(document.createElement("div"));
                        lastNameContainer.setAttribute("class", "last-name");

                        function lastName(){
                            function label(){
                                const label = lastNameContainer.appendChild(document.createElement("label"));
                                label.setAttribute("for", "last-name");
                                label.setAttribute("class", "input-label");
                                label.textContent = "Last Name"
                            }; label()

                            function name(){
                                const name = lastNameContainer.appendChild(document.createElement("input"));
                                name.setAttribute("type", "text");
                                name.setAttribute("class", "form-input");
                                name.setAttribute("placeholder", "Kent")
                            }; name()
                        }; lastName()


                    };lastNameContainer()
                }; nameInputContainer()

                function contactContainer(){}

                function passwordContainer(){}

                function submitContainer(){}

            }; form()
        }; formContainer()

    }; main()



}; travelForm()