const accordions = document.querySelectorAll('.cal_box');

for (let accordion of accordions) {
    const header = accordion.querySelector('.label');

    header.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents event bubbling

        // Toggle the active class for the accordion box
        accordion.classList.toggle('active');
    });
}
