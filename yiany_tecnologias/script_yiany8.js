/* =========================================
   Paso 4: Efecto "Scroll Reveal"
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está en el viewport (es visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
    });

    // Seleccionamos todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.fade-in-section');
    elementsToAnimate.forEach(element => observer.observe(element));

    /* =========================================
       Paso 5: Lógica del Modal
    ========================================= */

    const modal = document.getElementById('tech-modal');
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');

    const openModal = (trigger) => {
        // Poblar el modal con datos del trigger
        document.getElementById('modal-img').src = trigger.dataset.img;
        document.getElementById('modal-title').textContent = trigger.dataset.title;
        document.getElementById('modal-desc').textContent = trigger.dataset.desc;
        document.getElementById('modal-contrapunto').textContent = trigger.dataset.contrapunto;
        
        // Mostrar el modal
        modal.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        document.body.style.overflow = ''; // Restaura el scroll
    };

    // Event listeners para abrir el modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => openModal(trigger));
    });

    // Event listeners para cerrar el modal
    modal.addEventListener('click', (e) => {
        // Cierra si se hace clic en el overlay o en el botón de cierre
        if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
            closeModal();
        }
    });

});