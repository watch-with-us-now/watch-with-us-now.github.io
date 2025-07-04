document.addEventListener('DOMContentLoaded', () => {

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

    document.body.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

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
