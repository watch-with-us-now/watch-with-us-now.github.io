document.addEventListener('DOMContentLoaded', () => {

    // Lógica para cambiar de pestaña (sin cambios)
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

    // Delegación de eventos para los botones de la tabla
    document.querySelector('.main-content').addEventListener('click', event => {
        const target = event.target;

        // --- Lógica para el botón de COPIAR ---
        if (target.classList.contains('copy-btn')) {
            const valueToCopy = target.dataset.value;
            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const originalText = target.textContent;
                target.textContent = '¡Ok!';
                target.classList.add('copied');
                setTimeout(() => {
                    target.textContent = originalText;
                    target.classList.remove('copied');
                }, 1500);
            }).catch(err => console.error('Error al copiar: ', err));
        }

        // --- NUEVA LÓGICA para el botón de VISIBILIDAD ---
        if (target.classList.contains('toggle-vis-btn')) {
            // Busca el campo de contraseña que es hermano del botón
            const passwordInput = target.previousElementSibling.previousElementSibling;
            
            if (passwordInput && passwordInput.tagName === 'INPUT') {
                // Cambia el tipo de input
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                // Cambia el icono del botón
                target.textContent = isPassword ? '🙈' : '👁️';
            }
        }
    });
});
