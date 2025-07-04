document.addEventListener('DOMContentLoaded', () => {

    // Se usa delegación de eventos en el cuerpo del documento para abarcar todo
    document.body.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return; // Si no se hizo clic en un botón, no hace nada

        // Lógica para COPIAR TODO
        if (button.classList.contains('copy-btn')) {
            const valueToCopy = button.dataset.value;
            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => console.error('Error al copiar: ', err));
        }

        // Lógica para VISIBILIDAD DE CONTRASEÑA
        if (button.classList.contains('toggle-vis-btn')) {
            const passwordInput = button.parentElement.querySelector('input');
            const icon = button.querySelector('i');

            if (passwordInput && icon) {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                icon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
            }
        }
    });
});
