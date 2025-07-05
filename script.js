document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA LA NAVEGACIÓN DE PESTAÑAS ---
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.service-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.dataset.target;
            document.querySelector(targetId).classList.add('active');
        });
    });

    // --- NUEVA FUNCIÓN PARA MOSTRAR NOTIFICACIONES ---
    function showNotification(message) {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = 'notification-toast';
        notification.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;
        container.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000); // La notificación se borra después de 3 segundos
    }

    // --- LÓGICA PARA LOS BOTONES EN LAS TARJETAS ---
    document.body.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        // Lógica para COPIAR TODO
        if (button.classList.contains('copy-btn')) {
            const valueToCopy = button.dataset.value;
            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const originalHTML = button.innerHTML;
                button.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
                
                // ¡Llamamos a la nueva función de notificación!
                showNotification('¡Credenciales copiadas!');

                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => console.error('Error al copiar: ', err));
        }

        // Lógica para VISIBILIDAD DE CONTRASEÑA
        if (button.classList.contains('toggle-vis-btn')) {
            const passwordInput = button.closest('.password-wrapper').querySelector('input');
            const icon = button.querySelector('i');
            if (passwordInput && icon) {
                const isPassword = passwordInput.type === 'password';
                passwordInput.type = isPassword ? 'text' : 'password';
                icon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
            }
        }
    });
});
