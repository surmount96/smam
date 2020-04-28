window.onscroll = function () { myFunction() };

let sidebar = document.getElementById('sidebar');

function myFunction() {
    if (this.scrollY >= 600 ) {
        //sidebar

        sidebar.classList.add("sticky");
    } else {

        //navbar
        navbar.classList.remove("sticky", "bg-white", "shadow","navbar-white");

        navbar.classList.add("navbar-dark");


        //navbarToggler
        navbarToggler.classList.add('text-dark');
        //
        navbarToggler.classList.remove('blackToggler');

        //navLink
        navLink.forEach(function (navItem) {
            navItem.classList.remove("text-dark");
            navItem.classList.add("text-white");
        });

        //logo

        logo.width = "200";


    }


}
