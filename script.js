document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para los botones dentro de las tarjetas ---
    document.querySelector('.content-gallery').addEventListener('click', event => {
        // Usamos .closest para encontrar el botón si se hace clic en el icono <i> de adentro
        const button = event.target.closest('button');
        if (!button) return;

        // Lógica para COPIAR
        if (button.classList.contains('copy-btn')) {
            const valueToCopy = button.dataset.value;
            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const icon = button.querySelector('i');
                if(icon) icon.className = 'fa-solid fa-check'; // Cambia a check
                setTimeout(() => {
                    if(icon) icon.className = 'fa-regular fa-copy'; // Vuelve a copy
                }, 1500);
            }).catch(err => console.error('Error al copiar: ', err));
        }

        // Lógica para VISIBILIDAD DE CONTRASEÑA
        if (button.classList.contains('toggle-vis-btn')) {
            const credentialInput = button.parentElement;
            const passwordInput = credentialInput.querySelector('input');
            const icon = button.querySelector('i');

            if (passwordInput && icon) {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                icon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
            }
        }
    });

    // --- Lógica para el scroll suave del botón del Hero ---
    const heroButton = document.querySelector('.hero-button');
    if(heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
