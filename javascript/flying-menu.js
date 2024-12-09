function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    const chevronIcon = document.getElementById('chevron-icon');

    // Toggle menu visibility
    if (menuContainer.classList.contains('expanded')) {
        menuContainer.classList.remove('expanded');
        chevronIcon.classList.remove('bx-chevron-up');
        chevronIcon.classList.add('bx-dots-vertical-rounded');
    } else {
        menuContainer.classList.add('expanded');
        chevronIcon.classList.remove('bx-dots-vertical-rounded');
        chevronIcon.classList.add('bx-chevron-up');
    }
}
