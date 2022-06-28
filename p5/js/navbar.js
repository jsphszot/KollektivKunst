var menu_button = document.getElementById("menu-button");
var navbar = document.getElementById("navbar");
var body = document.querySelector("body");
var nav_ul = document.querySelector("nav ul");
var menu_li = document.getElementsByClassName("menu-li"); // <a> tag in navbar
var nav_links = document.getElementsByClassName("nav-links"); // <a> tag in navbar
var marquee = document.getElementsByClassName("marquee");



// Control navbar ----
// navbar functions
function set_a(item) {
    item.style.height = 95/menu_li.length + "vh";
    // item.style.lineHeight = 95/menu_li.length;
}

function ShowLoop(loopject, d_style=true) {
    var displaystyle = (d_style) ? '' : 'block';
   for (var i = 0; i < loopject.length; i++)
       loopject[i].style.display = displaystyle;
};
function HideLoop(loopject) {
    for (var i = 0; i < loopject.length; i++)
       loopject[i].style.display = 'none';
};
function OpenM() {
    // menu_button.textContent = "🞬";
    menu_button.textContent = "\u2715";
    navbar.style.height = "100vh";
    navbar.style.width = "100vw";
    
    // console.log(menu_button.offsetHeight)
    // console.log(navbar.offsetHeight)
    // get menu button height, and include in calculation to get height for each menu item
    var menu_minus_button_h = 95*(navbar.offsetHeight-menu_button.offsetHeight)/navbar.offsetHeight;
    var menu_item_vh = menu_minus_button_h/(menu_li.length+0) + "vh";
    // console.log(Math.round(menu_minus_button_h))
    // menu_li.forEach(set_a);
    menu_li.forEach(item => item.style.height = menu_item_vh);

    nav_links.forEach(item => item.style.height = menu_item_vh);
    nav_links.forEach(item =>  item.style.lineHeight = menu_item_vh); // V center text by making lineHeight == height
    nav_links.forEach(item =>  item.style.padding = "0vh");
    

    HideLoop(marquee);
    body.classList.add('stop-scrolling');

    ShowLoop(menu_li, d_style=false);
};
function CloseM(hide=true) {
    menu_button.textContent = "☰";
    navbar.style.height = "";
    body.classList.remove('stop-scrolling');

    menu_li.forEach(item => item.style.height = "");//"10vh");
    nav_links.forEach(item =>  item.style.height = "");
    nav_links.forEach(item =>  item.style.lineHeight = "");
    nav_links.forEach(item =>  item.style.padding = "");


    ShowLoop(marquee, d_style=false);
    

    (hide === true) ? HideLoop(menu_li) : ShowLoop(menu_li);
};

function OpenCloseMenu(){
    var windW = document.documentElement.clientWidth;
    navbar.clientWidth = windW;
    if (menu_button.textContent == "☰"){
        OpenM();
    } else {
        CloseM();
    }
};
function CloseResized(){
    // dummy function to close without hiding elements when window resize
    CloseM(hide=false);
};

// - - - - - - - -
// Fill navbar menu
// - - - - - - - -
function fillNavbar(){

    // var config_array;
    fetch("json/navbar.json")
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => fillNav(obj));
    
    
    // https://medium.com/@akshaygarg576/how-to-use-templates-in-vanilla-javascript-d550e328b33b 
    
    // add nav elements
    const fillNav = (config_array) => {
        config_array.navbar.forEach((navlink) => {
            nav_li = `
            <li class='menu-li'>
                <p>
                    <a class='nav-links' href="${navlink.href}">${navlink.txt}</a>
                </p>
            </li>
            `;
            nav_ul.innerHTML += nav_li;
            })
        }
        
};

// Runtime
fillNavbar();
menu_button.addEventListener('click', OpenCloseMenu);
window.addEventListener('resize', CloseResized);