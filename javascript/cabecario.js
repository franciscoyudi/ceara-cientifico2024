//Cabeçario

const header = document.querySelector(".navbar");
const scrollInit = 60;
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY
    if (scrollTop > scrollInit) {
        header.style.display = "none";
    } else {
        header.style.display = "flex";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#offcanvasDarkNavbar .nav-link').forEach(function (el) {
        el.addEventListener('click', function () {
            var offcanvasElement = document.getElementById('offcanvasDarkNavbar');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#offcanvasDarkNavbar .dropdown-item').forEach(function (el) {
        el.addEventListener('click', function () {
            var offcanvasElement = document.getElementById('offcanvasDarkNavbar');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });
});
