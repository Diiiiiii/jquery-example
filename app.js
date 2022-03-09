function jQueryExample() {
    //array je titleElement
    const titleElement = $("#title");
    //E.Event jQuery ima svoje funkcionalnosti i metode, dodaci na Pointer Event koji dolazi u JavaScriptu
    titleElement.click(function (event) {
        console.log(event);
        $.ajax({
            url: "./data.json",
            success: function (result) {
                console.log(result);
            },
        });
    });
    console.log(titleElement);
}

function jsExample() {
    //array je titleElement, drugačiji je postupak u jQuery od JavaScripta
    const titleElement = document.querySelectorAll("#title");
    titleElement.forEach((element) => {
        element.addEventListener("click", function (event) {
            //Pointer Event je klasičan event
            console.log(event);
            fetch("./data.json")
            .then(response => response.json())
            .then(json => console.log(json));
        });
    });
    console.log(titleElement);
}

// Dobijemo element koji je dio arreya, u Protoypu ima svega- click, clone, constructor...za rad s tim elementom tj. selekcijom
jQueryExample();
// Dobijemo DOM element, klasični
jsExample();