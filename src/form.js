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

        function form(){

            function legend(){

                function legendText(){}
            }

            function name(){}

            function contact(){}

            function password(){}

            function submit(){}
        }


    }; main()



}; travelForm()