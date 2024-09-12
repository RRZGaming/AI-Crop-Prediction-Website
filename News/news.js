// This file can be used to implement dynamic features, such as filtering articles by category or fetching articles from an API in the future

// News Category Filter
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const newsCards = document.querySelectorAll('.news-card');

        newsCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleDarkModeButton.textContent = '☀️ Light Mode';
    } else {
        toggleDarkModeButton.textContent = '🌙 Dark Mode';
    }
});