let family = {
    fam_name: "John Deo", // show_0
    fam_children: 50 + " children", // show_1
    fam_house: 100 + " house", // show_2
    fam_money: "billions", // show_3
    fam_car: 36 + " cars", // show_4
    fam_name_business: "Computer Condemn", // show_5
}

let family_button = document.getElementsByTagName("button")[0]; // Get the first Button

let show_family_button = family_button; // Stores it in another variable

let remove_button = document.getElementsByTagName("button")[1]; // Gets the Second Button

let hide_button = remove_button; // Store it in another Variable

let div_cover = document.getElementById("space_color"); //Gets the Div spacing For All the span Text Colo

// Start Of H1 element ID
let show_0 = document.getElementById("show0");
let show_1 = document.getElementById("show1");
let show_2 = document.getElementById("show2");
let show_3 = document.getElementById("show3");
let show_4 = document.getElementById("show4");
let show_5 = document.getElementById("show5");
// End Of H1 element ID


family_button.onclick = function() {
    div_cover.style.display = "block";

    show_0.innerHTML = family.fam_name;
    show_1.innerHTML = family.fam_children;
    show_2.innerHTML = family.fam_house;
    show_3.innerHTML = family.fam_money;
    show_4.innerHTML = family.fam_car;
    show_5.innerHTML = family.fam_name_business;

    show_family_button.style.display = "none";

    hide_button.style.display = "block";

}

remove_button.onclick = function() {
    div_cover.style.display = "none";

    hide_button.style.display = "none";

    show_family_button.style.display = "block";

}

