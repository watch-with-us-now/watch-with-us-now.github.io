document.addEventListener('DOMContentLoaded', () => {

    // Lógica para cambiar de pestaña (esta parte no cambia)
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

    // --- LÓGICA CORRECTA PARA COPIAR ---
    // Este código busca el botón presionado y copia el valor
    // único que tiene en su atributo "data-value".
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('copy-btn')) {
            const button = event.target;
            const valueToCopy = button.dataset.value; // Obtenemos el valor del atributo data-value

            if (!valueToCopy) return; // No hace nada si el valor está vacío

            navigator.clipboard.writeText(valueToCopy).then(() => {
                // Éxito al copiar
                const originalText = button.textContent;
                button.textContent = '¡Ok!';
                button.classList.add('copied');

                // Vuelve al texto original después de 1.5 segundos
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 1500);
            }).catch(err => {
                console.error('Error al copiar: ', err);
                alert("Error al intentar copiar."); // Mensaje de error si algo falla
            });
        }
    });
});
