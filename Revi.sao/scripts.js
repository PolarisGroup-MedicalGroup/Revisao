document.addEventListener('DOMContentLoaded', () => {
    const percentElements = document.querySelectorAll('.percent');
    percentElements.forEach(element => {
        const percent = parseInt(element.textContent, 10);
        if (percent >= 80) {
            element.style.color = 'green';
        } else if (percent >= 60) {
            element.style.color = 'orange';
        } else {
            element.style.color = 'red';
        }
    });
});
