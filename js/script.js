// Select the first 'button' element on the page
const viewMoreBtn = document.querySelector('button');

// Select all elements with the class '.view-card'
const viewMoreEl = document.querySelectorAll('.view-card');

// Add a click event listener to the button
viewMoreBtn.addEventListener('click', function () {
    // Check if the button text is 'View More'
    if (viewMoreBtn.innerText === 'View More') {
        // If true, change the button text to 'View Less'
        viewMoreBtn.innerText = 'View Less';
    } else {
        // If false, change the button text to 'View More'
        viewMoreBtn.innerText = 'View More';
    }

    // Toggle the 'view-card' class for each element with the class 'view-card'
    viewMoreEl.forEach((e) => {
        e.classList.toggle('view-card');
    });
});