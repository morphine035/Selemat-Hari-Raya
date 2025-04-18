document.addEventListener('DOMContentLoaded', () => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const sectionAnass = document.getElementById('arifin');
    const sectionEssadikine = document.getElementById('jehheng');

    left.addEventListener('click', () => {
        sectionAnass.classList.remove('hidden');
        sectionEssadikine.classList.add('hidden');
        left.classList.add('active');
        right.classList.remove('active');
    });

    right.addEventListener('click', () => {
        sectionAnass.classList.add('hidden');
        sectionEssadikine.classList.remove('hidden');
        left.classList.remove('active');
        right.classList.add('active');
    });

    const footer = document.getElementById("credit");
    if (footer) {
        footer.innerHTML = "Arifin";
        footer.href = "https://www.linkedin.com/in/anass-essadikine/";
    }
});
