import '../scss/layout.scss';

/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/
    
const userMenuDiv = document.getElementById("userMenu");
const userMenu = document.getElementById("userButton");

const navMenuDiv = document.getElementById("nav-content");
const navMenu = document.getElementById("nav-toggle");



document.onclick = check;

function check(e: { target: any; }) {
    var target = (e && e.target) || (event && event.srcElement);

    //User Menu
    if (!checkParent(target, userMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, userMenu)) {
            // click on the link
            if (userMenuDiv?.classList.contains("invisible")) {
                userMenuDiv?.classList.remove("invisible");
            } else { userMenuDiv?.classList.add("invisible"); }
        } else {
            // click both outside link and outside menu, hide menu
            userMenuDiv?.classList.add("invisible");
        }
    }

    //Nav Menu
    if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv?.classList.contains("hidden")) {
                navMenuDiv?.classList.remove("hidden");
            } else { navMenuDiv?.classList.add("hidden"); }
        } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv?.classList.add("hidden");
        }
    }

}

function checkParent(t: { parentNode: any; }, elm: HTMLElement | null) {
    while (t.parentNode) {
        if (t == elm) { return true; }
        t = t.parentNode;
    }
    return false;
}