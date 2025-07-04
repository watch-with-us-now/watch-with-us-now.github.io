document.addEventListener('DOMContentLoaded', () => {

    // Lógica para cambiar de pestaña
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que la página salte

            // Oculta todas las secciones y quita la clase activa de los links
            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Muestra la sección correcta y marca el link como activo
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
            link.classList.add('active');
        });
    });

    // Lógica para los botones de copiar
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('copy-btn')) {
            const button = event.target;
            const email = button.dataset.email;
            const password = button.dataset.pass;
            const credentials = `${email}:${password}`;

            navigator.clipboard.writeText(credentials).then(() => {
                // Éxito al copiar
                const originalText = button.textContent;
                button.textContent = '¡Copiado!';
                button.classList.add('copied');

                // Vuelve al texto original después de 2 segundos
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar: ', err);
            });
        }
    });
});
