/* jshint esversion: 6 */
const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-nav');

if (menuButton && navigation) {
    function setMenuOpen(isOpen) {
        navigation.classList.toggle('hidden', !isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    menuButton.addEventListener('click', function () {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            menuButton.focus();
        }
    });

    navigation.addEventListener('click', function (event) {
        if (event.target.closest('a')) {
            setMenuOpen(false);
        }
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', function () {
        setMenuOpen(false);
    });
}
