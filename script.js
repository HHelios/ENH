const tabs = document.querySelectorAll('.🧭 .📍');
const contentSections = document.querySelectorAll('main section');

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();
        tabs.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');
        contentSections.forEach(section => {
            section.style.display = section.id != tab.dataset.target ? 'none' : 'block'; 
        });
    });
});

document.getElementById('home').style.display = 'block';