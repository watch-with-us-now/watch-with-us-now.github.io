document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMACIÓN DE ENTRADA AL CARGAR LA PÁGINA ---
    const initialElements = document.querySelectorAll('.animate-on-load');
    initialElements.forEach(el => el.classList.add('visible'));

    // --- ANIMACIÓN INTELIGENTE AL HACER SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // El elemento se anima cuando el 10% es visible
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- LÓGICA PARA BOTONES (COPIAR Y VISIBILIDAD) ---
    document.querySelector('.content-gallery').addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.classList.contains('copy-btn')) {
            const valueToCopy = button.dataset.value;
            if (!valueToCopy) return;

            navigator.clipboard.writeText(valueToCopy).then(() => {
                const icon = button.querySelector('i');
                if(icon) icon.className = 'fa-solid fa-check';
                setTimeout(() => {
                    if(icon) icon.className = 'fa-regular fa-copy';
                }, 1500);
            }).catch(err => console.error('Error al copiar: ', err));
        }

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
