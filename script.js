// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the element that triggers the toggle
    var dropdownTrigger = document.querySelector('.nav-link-dropdown');

    function toggleMegaMenu() {
        var megaMenu = document.querySelector('.mega-menu');
        if (megaMenu.style.display === "none" || megaMenu.style.display === '') {
            megaMenu.style.display = "block";
        } else {
            megaMenu.style.display = "none";
        }
    }

    dropdownTrigger.addEventListener('click', toggleMegaMenu);
});
