document.addEventListener('DOMContentLoaded', () => {

    // Lógica para cambiar de pestaña
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            const targetId = link.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
            link.classList.add('active');
        });
    });

    // Lógica para los botones de copiar
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('copy-btn')) {
            const button = event.target;
            const valueToCopy = button.dataset.value;

            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const originalText = button.textContent;
                button.textContent = '¡Ok!';
                button.classList.add('copied');

                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 1500);
            }).catch(err => {
                console.error('Error al copiar: ', err);
                alert("Error al intentar copiar.");
            });
        }
    });
});
