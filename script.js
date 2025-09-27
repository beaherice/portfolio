document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');

    // Toggle mobile menu
    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    }

    // Event listeners
    hamburgerIcon.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            toggleMenu();
        }
    });

    // Close menu when clicking on menu items
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });

    // Highlight active nav links (desktop and mobile)
    const setActiveNav = () => {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        // desktop nav links
        document.querySelectorAll('nav a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === path) {
                a.classList.add('nav-active');
            } else {
                a.classList.remove('nav-active');
            }
        });
        // mobile menu links
        document.querySelectorAll('#mobile-menu a').forEach(a => {
            const href = a.getAttribute('href');
            if (href === path) {
                a.classList.add('nav-active');
            } else {
                a.classList.remove('nav-active');
            }
        });
    };

    setActiveNav();
});
