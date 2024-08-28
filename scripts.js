// script.js

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.grid-element');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 50 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        items.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('fade-in');
            } else {
                item.classList.remove('fade-in');
            }
        });
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Initial check in case items are already in view
    handleScroll();
});
